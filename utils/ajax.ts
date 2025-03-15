import axios from 'axios'
import Result, { ResultCode } from '~/model/Result'

const ajax = axios.create({
  timeout: 5000
})

ajax.interceptors.request.use((config) => {
  config.headers['Content-Type'] ||= 'application/json;charset=utf-8'
  config.headers['Authorization'] ||= ClientTokenUtil.get()
  return config
})

ajax.interceptors.response.use(
  (response) => {
    const { code, message } = response.data as Result<any>
    if (code === ResultCode.UNAUTHORIZED) {
      ClientTokenUtil.remove()
      Toast.warn(message)
      navigateTo('/login')
      return Promise.reject(message)
    }
    if (code !== ResultCode.SUCCESS) {
      Toast.danger(message)
      return Promise.reject(message)
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default ajax
