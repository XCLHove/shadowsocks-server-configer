FROM node:20-alpine

WORKDIR /app
COPY ./.output/ /app/src/

ENV CONTAINER_NAME=shadowsocks-server
ENV DOCKER_PATH=/var/run/docker.sock
ENV CONFIG_PATH=/app/config/config.json
ENV ADMIN_USER=admin
ENV PASSWORD=123456

EXPOSE 3000

CMD [ "node", "/app/src/server/index.mjs" ]

LABEL org.opencontainers.image.source https://github.com/xclhove/shadowsocks-server-configer