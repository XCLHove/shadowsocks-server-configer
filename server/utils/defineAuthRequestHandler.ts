import Result, { ResultCode } from '~/model/Result'
import ServerTokenUtil from '~/utils/ServerTokenUtil'

export const defineAuthRequestHandler = <Response = Result>(
  handler: Parameters<typeof defineHttpRequestHandler<Response>>[0]
): ReturnType<typeof defineHttpRequestHandler<Response | Result>> => {
  return defineHttpRequestHandler<Response | Result>((event) => {
    const token = getHeader(event, 'authorization')
    if (!token) {
      return Result.error('请先登录', ResultCode.UNAUTHORIZED)
    }
    const existToken = ServerTokenUtil.get()
    if (!existToken || token !== existToken) {
      return Result.error('请先登录', ResultCode.UNAUTHORIZED)
    }
    return handler(event)
  })
}
