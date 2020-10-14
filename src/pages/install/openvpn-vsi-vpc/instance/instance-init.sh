#!/bin/bash
# disable the auto update
systemctl stop apt-daily.service
systemctl kill --kill-who=all apt-daily.service

# wait until `apt-get updated` has been killed
while ! (systemctl list-units --all apt-daily.service | egrep -q '(dead|failed)')
do
  sleep 1;
done

apt-get update
apt-get install -y netplan

cat > /etc/netplan/99-custom-dns.yaml << EOF
network:
  version: 2
  ethernets:
    ens3:
      nameservers:
        addresses: [ "161.26.0.7", "161.26.0.8" ]
      dhcp4-overrides:
        use-dns: false
EOF

netplan apply

cat >> /etc/dhcp/dhclient.conf << EOF

# added by cloud-init configuration

# resolve names against private dns
supersede domain-name-servers 161.26.0.7, 161.26.0.8;

# and allow short names to be searched so <somehost>.cloud-native.test can be resolved with just <somehost>
supersede domain-search "cloud-native.test";
EOF

dhclient -v -r; dhclient -v
systemd-resolve --flush-caches
