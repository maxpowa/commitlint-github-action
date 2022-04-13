#!/bin/sh

set -e

if [ -z "$NODE_PATH" ]; then
  export NODE_PATH=/node_modules
else
  export NODE_PATH=$NODE_PATH:/node_modules
fi

git config --global safe.directory /github/workspace

node /run.js
