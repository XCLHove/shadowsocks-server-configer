import crypto from 'crypto-js'

const EncryptUtil = {
  encrypt: (value: string, key: string = '') => {
    return crypto.SHA256(value + key).toString()
  }
}

export default EncryptUtil
