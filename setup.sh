#!/bin/bash

curl https://raw.githubusercontent.com/kurzai/base-ts/main/tsconfig.json > tsconfig.json
curl https://raw.githubusercontent.com/kurzai/base-ts/main/jest.config.cjs > jest.config.cjs
curl https://raw.githubusercontent.com/kurzai/base-ts/main/.eslintrc.cjs > .eslintrc.cjs

npm init -y
mkdir src
touch src/index.ts

curl https://raw.githubusercontent.com/kurzai/base-ts/main/package.json > package.json
npm i
