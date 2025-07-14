#!/bin/sh
set -e
./install.sh
echo "Starting services with docker-compose..."
docker-compose up
