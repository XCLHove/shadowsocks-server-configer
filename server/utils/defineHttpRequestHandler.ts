import { EventHandlerRequest, H3Error } from 'h3'
import { ZodError } from 'zod'
import Result, { ResultCode } from '~/model/Result'

export const defineHttpRequestHandler = <Response = Result>(
  handler: (event: Parameters<Parameters<typeof defineEventHandler<EventHandlerRequest>>[0]>[0]) => MaybePromise<Response>
): ReturnType<typeof defineEventHandler<EventHandlerRequest, MaybePromise<Result | Response>>> => {
  return defineEventHandler<EventHandlerRequest, MaybePromise<Result | Response>>(async (event) => {
    const path = event.path

    try {
      const response = await handler(event)
      if (response) return response

      return Result.success()
    } catch (err) {
      if (err instanceof ZodError) return Result.error(err.issues[0].message, ResultCode.ZOD_ERROR)
      if (err instanceof H3Error) return Result.error(err.message, ResultCode.H3_ERROR)

      console.error(`<${path}>处理请求时出错`, err)
      return Result.error('处理请求时出错')
    }
  })
}
