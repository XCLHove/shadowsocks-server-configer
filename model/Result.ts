export default class Result<T = any> {
  constructor(
    public code: number,
    public message: string,
    public data: T
  ) {}

  static success<T>(data?: T) {
    return new Result(ResultCode.SUCCESS, 'success', data)
  }

  static error(message: string, code: number = ResultCode.ERROR) {
    return new Result(code, message, null)
  }
}

export enum ResultCode {
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  ERROR = 500,
  ZOD_ERROR = 600,
  H3_ERROR = 601
}
