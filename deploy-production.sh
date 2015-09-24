#!/bin/bash

cp -f ./app/constants/deploys/Config.production.js ./app/constants/Config.js
cp -a ./app/assets ./
cp -f ./app/index.production.html ./index.html
