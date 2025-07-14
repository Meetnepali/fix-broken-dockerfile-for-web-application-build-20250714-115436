#!/bin/sh
set -e
if [ ! -d node_modules ]; then
  echo "Installing Node.js dependencies..."
  npm install
fi
  echo "Building Docker image..."
  docker-compose build
  echo "Install script complete."
