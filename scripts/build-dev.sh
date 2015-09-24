#!/bin/bash

cat ./app/constants/middleware.api.init.js | sed "s/\'\ \+\ location.host.split(':')\[0\]\ \+\ \'/172.17.34.10/g" > ./app/middleware/api.js;
#node server.js