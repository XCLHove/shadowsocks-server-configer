import * as fs from 'fs'
import Result from '~/model/Result'

const path = process.env.CONFIG_PATH as string
export default defineAuthRequestHandler((event) => {
  if (!path) {
    return Result.error('未设置配置文件路径')
  }
  if (!fs.existsSync(path)) {
    return Result.error('配置文件不存在')
  }
  const configJsonStr = fs.readFileSync(path)
  const config = JSON.parse(configJsonStr.toString()) as Config
  return Result.success(config)
})
