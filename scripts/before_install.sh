#!/bin/bash
set -e

# Install Nginx on Amazon Linux 2023
echo "Installing Nginx..."
yum update -y
yum install -y nginx
systemctl enable nginx

# Clean out the old web content
rm -rf /usr/share/nginx/html/*