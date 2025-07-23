#!/bin/bash
set -e

# Nginx is already installed, and the new files are in place.
# This script just needs to start the server.
systemctl start nginx