# shadowsocks-server-configer

## 介绍

在网页上管理 `shadowsocks-server` 的配置文件。

## 环境变量

1. `CONFIG_PATH`: `shadowsocks-server` 配置文件路径，默认为 `/app/config/config.json`
2. `DOCKER_PATH`: `Docker` 通信文件路径，默认为 `/var/run/docker.sock`
3. `CONTAINER_NAME`: `shadowsocks-server` 容器名称，默认为 `shadowsocks-server`
4. `ADMIN_USER`: 后台管理用户名，默认为 `admin`
5. `PASSWORD`: 后台管理密码，默认为 `123456`

## docker 部署

```shell
docker run -d \
  --restart=always \
  --name shadowsocks-server-configer \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /home/xclhove/shadosocks-server-config/example/config.json:/app/config/config.json \
  -p 3000:3000 \
  -e CONTAINER_NAME=shadowsocks-server-configer \
  -e CONFIG_PATH=/app/config/config.json \
  -e ADMIN_USER=admin \
  -e PASSWORD=123456 \
  ghcr.io/xclhove/shadowsocks-server-configer:latest
```

## docker-compose 部署

```yaml
version: '3.8'
services:
  shadowsocks-server-configer:
    image: ghcr.io/xclhove/shadowsocks-server-configer:latest
    container_name: shadowsocks-server-configer
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /home/xclhove/shadosocks-server-config/example/config.json:/app/config/config.json
    ports:
      - "3000:3000"
    environment:
      - CONTAINER_NAME=shadowsocks-server-configer
      - CONFIG_PATH=/app/config/config.json
      - ADMIN_USER=admin
      - PASSWORD=123456

```