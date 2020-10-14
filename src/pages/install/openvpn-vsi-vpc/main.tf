resource ibm_resource_group group {
  name = "${var.basename}-group"
  tags = var.tags
}

data ibm_is_ssh_key sshkey {
  count = var.vpc_ssh_key_name != "" ? 1 : 0
  name  = var.vpc_ssh_key_name
}

resource tls_private_key ssh {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource ibm_is_ssh_key generated_key {
  name           = "${var.basename}-${var.region}-key"
  public_key     = tls_private_key.ssh.public_key_openssh
  resource_group = ibm_resource_group.group.id
  tags           = concat(var.tags, ["vpc"])
}

locals {
  ssh_key_ids = var.vpc_ssh_key_name != "" ? [data.ibm_is_ssh_key.sshkey[0].id, ibm_is_ssh_key.generated_key.id] : [ibm_is_ssh_key.generated_key.id]
}

module vpc {
  source            = "./vpc"
  name              = "${var.basename}-vpc"
  region            = var.region
  cidr_blocks       = ["10.10.10.0/24"]
  resource_group_id = ibm_resource_group.group.id
  tags              = var.tags
}

module instance {
  source = "./instance"

  name = "${var.basename}-instance"  
  resource_group_id = ibm_resource_group.group.id
  vpc_id = module.vpc.vpc.id
  vpc_subnets = module.vpc.subnets
  ssh_key_ids = local.ssh_key_ids
  tags = concat(var.tags, ["instance"])
}

module bastion {
  source = "./bastion"

  name = "${var.basename}-bastion"
  resource_group_id = ibm_resource_group.group.id
  vpc_id = module.vpc.vpc.id
  vpc_subnet = module.vpc.subnets.0
  ssh_key_ids = local.ssh_key_ids
  tags = concat(var.tags, ["bastion"])
}

resource "ibm_is_security_group_network_interface_attachment" "under_maintenance" {
  for_each          = { for member in module.instance.instances : member.name => member }
  network_interface = each.value.primary_network_interface.0.id
  security_group    = module.bastion.maintenance_group_id
}

output bastion_ip {
  value = module.bastion.bastion_ip
}

output instance_ips {
  value = [
    for instance in module.instance.instances : instance.primary_network_interface.0.primary_ipv4_address
  ]
}

module ansible {
  source = "./ansible"
  bastion_ip = module.bastion.bastion_ip
  instances = module.instance.instances
  subnets = module.vpc.subnets
  private_key_pem = tls_private_key.ssh.private_key_pem
}