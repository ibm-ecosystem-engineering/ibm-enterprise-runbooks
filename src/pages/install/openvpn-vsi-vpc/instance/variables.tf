variable name {}
variable vpc_id {}
variable vpc_subnets {}
variable resource_group_id {}

variable instance_count {
  default = 1
}
variable ssh_key_ids {}
variable image_name {
  default = "ibm-ubuntu-18-04-1-minimal-amd64-2"
}
variable profile_name {
  default = "cx2-2x4"
}
variable security_groups {
  default = null
}
variable tags {}