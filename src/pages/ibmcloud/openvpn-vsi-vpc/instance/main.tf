data ibm_is_image image {
  name = var.image_name
}

resource "ibm_is_instance" "instance" {
  count = var.instance_count

  name           = "${var.name}-${count.index + 1}"
  vpc            = var.vpc_id
  zone           = var.vpc_subnets[count.index % length(var.vpc_subnets)].zone
  profile        = var.profile_name
  image          = data.ibm_is_image.image.id
  keys           = var.ssh_key_ids
  resource_group = var.resource_group_id

  # inject dns config
  user_data = file("${path.module}/instance-init.sh")

  primary_network_interface {
    subnet = var.vpc_subnets[count.index % length(var.vpc_subnets)].id
    security_groups = var.security_groups != null ? var.security_groups : null
  }

  boot_volume {
    name = "${var.name}-${count.index + 1}-boot"
  }

  tags = concat(var.tags, ["vpc"])
}

output instances {
  value = ibm_is_instance.instance
}