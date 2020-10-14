resource "local_file" "ansible-inventory" {
  content = templatefile("${path.module}/inventory.tmpl",
    {
      instances  = var.instances
      bastion_ip = var.bastion_ip
    }
  )
  filename = "${path.module}/inventory"
}

resource "local_file" "ansible-config" {
  content = templatefile("${path.module}/ansible.cfg.tmpl",
    {
      bastion_ip = var.bastion_ip
    }
  )
  filename = "${path.module}/ansible.cfg"

  # to make sure the directory is not writable by other
  # so that Ansible does not complain on Windows
  provisioner "local-exec" {
    command = "chmod o-w ${path.module}"
  }
}

resource "local_file" "ssh-key" {
  content         = var.private_key_pem
  filename        = "${path.module}/generated_key_rsa"
  file_permission = "0600"
}

resource "local_file" "openvpn-playbook" {
  content = templatefile("${path.module}/playbook-openvpn.yml.tmpl",
    {
      bastion_ip = var.bastion_ip
      subnets = var.subnets
    }
  )
  filename = "${path.module}/playbook-openvpn.yml"
}