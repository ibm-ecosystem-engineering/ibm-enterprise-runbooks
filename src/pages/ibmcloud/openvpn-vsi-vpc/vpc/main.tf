resource ibm_is_vpc vpc {
  name                      = var.name
  resource_group            = var.resource_group_id
  address_prefix_management = "manual"
  tags                      = concat(var.tags, ["vpc"])
}

resource ibm_is_vpc_address_prefix subnet_prefix {
  count = length(var.cidr_blocks)

  name = "${var.name}-zone-${count.index + 1}"
  zone = "${var.region}-${(count.index % 3) + 1}"
  vpc  = ibm_is_vpc.vpc.id
  cidr = var.cidr_blocks[count.index]
}

resource ibm_is_network_acl network_acl {
  name           = "${var.name}-acl"
  vpc            = ibm_is_vpc.vpc.id
  resource_group = var.resource_group_id

  rules {
    name        = "egress"
    action      = "allow"
    source      = "0.0.0.0/0"
    destination = "0.0.0.0/0"
    direction   = "outbound"
  }
  rules {
    name        = "ingress"
    action      = "allow"
    source      = "0.0.0.0/0"
    destination = "0.0.0.0/0"
    direction   = "inbound"
  }
}

resource "ibm_is_public_gateway" "gateway" {
  count = length(var.cidr_blocks)

  name = "${var.name}-gateway-${count.index + 1}"
  vpc = ibm_is_vpc.vpc.id
  zone = "${var.region}-${(count.index % 3) + 1}"
  resource_group  = var.resource_group_id
}

resource ibm_is_subnet subnet {
  count = length(var.cidr_blocks)

  name            = "${var.name}-subnet-${count.index + 1}"
  vpc             = ibm_is_vpc.vpc.id
  zone            = "${var.region}-${(count.index % 3) + 1}"
  resource_group  = var.resource_group_id
  ipv4_cidr_block = ibm_is_vpc_address_prefix.subnet_prefix[count.index].cidr
  network_acl     = ibm_is_network_acl.network_acl.id
  public_gateway  = ibm_is_public_gateway.gateway[count.index].id
}

output vpc {
  value = ibm_is_vpc.vpc
}

output subnets {
  value = ibm_is_subnet.subnet
}

resource "ibm_is_security_group_rule" "ping" {
  group     = ibm_is_vpc.vpc.default_security_group
  direction = "inbound"
  remote    = "0.0.0.0/0"
  icmp {
    type = 8
  }
}

# from https://cloud.ibm.com/docs/vpc?topic=vpc-service-endpoints-for-vpc
resource "ibm_is_security_group_rule" "cse_dns_1" {
  group     = ibm_is_vpc.vpc.default_security_group
  direction = "outbound"
  remote    = "161.26.0.10"
  udp {
    port_min = 53
    port_max = 53
  }
}

resource "ibm_is_security_group_rule" "cse_dns_2" {
  group     = ibm_is_vpc.vpc.default_security_group
  direction = "outbound"
  remote    = "161.26.0.11"
  udp {
    port_min = 53
    port_max = 53
  }
}

resource "ibm_is_security_group_rule" "private_dns_1" {
  group     = ibm_is_vpc.vpc.default_security_group
  direction = "outbound"
  remote    = "161.26.0.7"
  udp {
    port_min = 53
    port_max = 53
  }
}

resource "ibm_is_security_group_rule" "private_dns_2" {
  group     = ibm_is_vpc.vpc.default_security_group
  direction = "outbound"
  remote    = "161.26.0.8"
  udp {
    port_min = 53
    port_max = 53
  }
}