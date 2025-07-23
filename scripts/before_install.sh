#!/bin/bash
set -e

# Install Nginx if it is not already installed
if ! rpm -q nginx > /dev/null; then
  yum install -y nginx
  systemctl enable nginx
fi

# Clean out the old web content before the new version is deployed
rm -rf /usr/share/nginx/html/*