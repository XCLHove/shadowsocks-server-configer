let key = 'token'
export default {
  get() {
    return localStorage.getItem(key)
  },
  set(value: string) {
    localStorage.setItem(key, value)
  },
  remove() {
    localStorage.removeItem(key)
  }
}
