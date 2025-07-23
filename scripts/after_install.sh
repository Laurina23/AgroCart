#!/bin/bash
yum install -y nginx
systemctl enable nginx
systemctl start nginx
cp -r /var/www/html/build/* /usr/share/nginx/html/
