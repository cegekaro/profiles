#!/usr/bin/env bash

# Stop running containers
./shell/docker-stop.sh;

echo "" && \
echo "+------------------------------------------+" && \
echo "|  Booting up containers for Cegeka        |" && \
echo "|  Profiles Frontend Infrastructure        |" && \
echo "+------------------------------------------+" && \
echo "";

docker run -d --name profiles-frontend -p 80:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4
