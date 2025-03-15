import ajax from '~/utils/ajax'
import Result from '~/model/Result'

export const loginApi = (params: LoginForm) => {
  return ajax.post('/api/login', params).then((r) => r.data) as Promise<Result<string>>
}

export const getConfigApi = () => {
  return ajax.get('/api/config').then((r) => r.data) as Promise<Result<Config>>
}

export const saveConfigApi = (params: Config) => {
  return ajax.post('/api/config', params).then((r) => r.data) as Promise<Result<null>>
}

export const restartContainerApi = () => {
  return ajax.post('/api/container/restart').then((r) => r.data) as Promise<Result<void>>
}
