#!/bin/bash

npm run switch:pro
cp -a ./app/assets ./
cp -a ./app/index.html ./
npm run build:pro
