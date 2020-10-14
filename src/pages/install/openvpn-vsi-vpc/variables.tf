variable "ibmcloud_api_key" {}

variable "region" {
  default = "us-south"
}

variable "ibmcloud_timeout" {
  default = 900
}

variable "basename" {
  default = "openvpn"
}

variable "vpc_ssh_key_name" {
  default = ""
}

variable "tags" {
  default = ["terraform"]
}
