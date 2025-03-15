import * as fs from 'fs'
import Result from '~/model/Result'

const configPath = process.env.CONFIG_PATH as string
export default defineAuthRequestHandler(async (event) => {
  if (!configPath) {
    return Result.error('未设置配置文件路径')
  }
  if (!fs.existsSync(configPath)) {
    return Result.error('配置文件不存在')
  }
  try {
    const requestBody = (await readBody(event)) as Config
    fs.writeFileSync(process.env.CONFIG_PATH as string, JSON.stringify(requestBody, null, 4))

    return Result.success(null)
  } catch (e) {
    console.error(e)
    return Result.error('保存失败')
  }
})
