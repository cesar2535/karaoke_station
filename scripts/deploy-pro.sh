#!/bin/bash

npm run swith:pro
cp -a ./app/assets ./
cp -a ./app/index.html ./
npm run build:pro
