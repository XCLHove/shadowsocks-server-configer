export {}

declare global {
  interface Config {
    servers: Server[]
    local_address: string
    local_port: number
  }

  interface Server {
    server: string
    server_port: number
    password: string
    method: string
    timeout: number
  }
}
