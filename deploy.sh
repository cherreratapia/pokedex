#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# deploy
yarn deploy

cd -