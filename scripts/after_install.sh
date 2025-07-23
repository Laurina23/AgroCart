#!/bin/bash
yum install -y nginx
systemctl enable nginx
systemctl start nginx

rm -rf /usr/share/nginx/html/*
cp -r /var/www/html/* /usr/share/nginx/html/
