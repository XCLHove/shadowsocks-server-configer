import Result from '~/model/Result'
import { restartDockerContainer } from '~/server/services/dockerService'

const containerName = process.env.CONTAINER_NAME
export default defineAuthRequestHandler(async () => {
  if (!containerName) {
    return Result.error('未设置容器名称')
  }

  return restartDockerContainer()
    .then(() => {
      return Result.success()
    })
    .catch((error) => {
      console.error(error)
      return Result.error(error.reason || '重启容器失败')
    })
})
