// @ts-ignore
import ToastifyEs from 'toastify-js/src/toastify-es'
import 'toastify-js/src/toastify.css'

const position = {
  gravity: 'top',
  position: 'right'
}

const Toast = {
  success(text: string, duration: number = 1500, close: boolean = false) {
    ToastifyEs({
      text: text,
      duration: duration,
      close: close,
      style: {
        background: 'var(--color-success)'
      },
      ...position
    }).showToast()
  },
  primary(text: string, duration: number = 1500, close: boolean = false) {
    ToastifyEs({
      text: text,
      duration: duration,
      close: close,
      style: {
        background: 'var(--color-primary)'
      },
      ...position
    }).showToast()
  },
  info(text: string, duration: number = 1500, close: boolean = false) {
    ToastifyEs({
      text: text,
      duration: duration,
      close: close,
      style: {
        background: 'var(--color-info)'
      },
      ...position
    }).showToast()
  },
  warn(text: string, duration: number = 1500, close: boolean = false) {
    ToastifyEs({
      text: text,
      duration: duration,
      close: close,
      style: {
        background: 'var(--color-warn)'
      },
      ...position
    }).showToast()
  },
  danger(text: string, duration: number = 1500, close: boolean = false) {
    ToastifyEs({
      text: text,
      duration: duration,
      close: close,
      style: {
        background: 'var(--color-danger)'
      },
      ...position
    }).showToast()
  }
}

export default Toast
