import { z } from 'zod'

export const userValidateRule = {
  username: z.string({ required_error: '账号不能为空' }).nonempty('账号不能为空'),
  password: z.string({ required_error: '密码不能为空' }).nonempty('密码不能为空')
}
