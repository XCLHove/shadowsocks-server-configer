import Docker from 'dockerode'

const docker = new Docker({ socketPath: process.env.DOCKER_PATH || '/var/run/docker.sock' })
const shadowsocksServerContainerName = process.env.CONTAINER_NAME || 'shadowsocks-server'

export const restartDockerContainer = (id?: string) => {
  return docker.getContainer(id || shadowsocksServerContainerName).restart()
}
