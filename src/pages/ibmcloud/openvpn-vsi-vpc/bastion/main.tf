resource ibm_is_security_group bastion {
  name           = "${var.name}-group"
  vpc            = var.vpc_id
  resource_group = var.resource_group_id
}

module "instance" {
  source          = "../instance"
  vpc_id = var.vpc_id
  resource_group_id = var.resource_group_id
  vpc_subnets = [ var.vpc_subnet ]

  ssh_key_ids     = var.ssh_key_ids
  name            = var.name
  tags            = var.tags
  security_groups = [ibm_is_security_group.bastion.id]
}

resource "ibm_is_floating_ip" "bastion_ip" {
  name           = "${var.name}-ip"
  target         = module.instance.instances.0.primary_network_interface.0.id
  resource_group = var.resource_group_id
}

resource "ibm_is_security_group_rule" "ssh" {
  group     = ibm_is_security_group.bastion.id
  direction = "inbound"
  remote    = "0.0.0.0/0"
  tcp {
    port_min = 22
    port_max = 22
  }
}

resource "ibm_is_security_group_rule" "egress_all" {
  group     = ibm_is_security_group.bastion.id
  direction = "outbound"
  remote    = "0.0.0.0/0"
}

resource "ibm_is_security_group_rule" "vpn" {
  group     = ibm_is_security_group.bastion.id
  direction = "inbound"
  remote    = "0.0.0.0/0"
  udp {
    port_min = 65000
    port_max = 65000
  }
}

output "bastion_ip" {
  value = ibm_is_floating_ip.bastion_ip.address
}

resource "ibm_is_security_group" "maintenance" {
  name           = "${var.name}-maintenance"
  vpc            = var.vpc_id
  resource_group = var.resource_group_id
}

resource "ibm_is_security_group_rule" "ssh_inbound" {
  group     = ibm_is_security_group.maintenance.id
  direction = "inbound"
  remote    = module.instance.instances.0.primary_network_interface.0.primary_ipv4_address
  tcp {
    port_min = 22
    port_max = 22
  }
}

resource "ibm_is_security_group_rule" "http_outbound" {
  group     = ibm_is_security_group.maintenance.id
  direction = "outbound"
  remote    = "0.0.0.0/0"
  tcp {
    port_min = 80
    port_max = 80
  }
}

resource "ibm_is_security_group_rule" "https_outbound" {
  group     = ibm_is_security_group.maintenance.id
  direction = "outbound"
  remote    = "0.0.0.0/0"
  tcp {
    port_min = 443
    port_max = 443
  }
}

output maintenance_group_id {
  value = ibm_is_security_group.maintenance.id
}

