[defaults]
host_key_checking = False

[ssh_connection]
# use pipelining to speed up ansible by reusing SSH connection between tasks
pipelining = True
control_path = /tmp/ansible-ssh-%%h-%%p-%%r
# go through the bastion to reach out all VSIs
ssh_args = -i generated_key_rsa -o "StrictHostKeyChecking=no" -o ProxyCommand="ssh -i generated_key_rsa -o StrictHostKeyChecking=no -W %h:%p root@${bastion_ip}"
scp_if_ssh = true
