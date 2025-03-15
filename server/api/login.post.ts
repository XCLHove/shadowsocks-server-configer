import Result from '~/model/Result'
import ServerTokenUtil from '~/utils/ServerTokenUtil'
import { userValidateRule } from '~/server/validate-rule/userValidateRule'
import { z } from 'zod'
import EncryptUtil from '~/utils/EncryptUtil'

const username = process.env.ADMIN_USER as string
const password = process.env.PASSWORD as string
const validateRule = z.object({
  username: userValidateRule.username,
  password: userValidateRule.password
})
export default defineHttpRequestHandler(async (event) => {
  if (!username) {
    return Result.error('未配置管理员账号')
  }
  if (!password) {
    return Result.error('未配置管理员密码')
  }

  const requestBody = await readBody(event)
  const loginForm = validateRule.parse(requestBody)
  if (loginForm.username !== username) {
    return Result.error('用户名错误')
  }
  if (loginForm.password !== EncryptUtil.encrypt(password, username)) {
    return Result.error('密码错误')
  }
  const token = ServerTokenUtil.generate()
  ServerTokenUtil.set(token)
  return Result.success(token)
})
