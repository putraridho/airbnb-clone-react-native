#! /bin/bash
yarn build:server
docker build -t putraridho/airbnb-clone:latest .
docker push putraridho/airbnb-clone:latest
ssh root@128.199.236.246 "docker pull putraridho/airbnb-clone:latest && docker tag putraridho/airbnb-clone:latest dokku/airbnb-clone:latest && dokku tags:deploy airbnb-clone latest"