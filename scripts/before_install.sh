#!/bin/bash
set -e

# Install Nginx if it's not already installed
if ! rpm -q nginx > /dev/null; then
  yum install -y nginx
  systemctl enable nginx
fi

# Clean the web root directory for the new deployment
rm -rf /usr/share/nginx/html/*