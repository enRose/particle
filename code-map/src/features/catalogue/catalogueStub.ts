import { isLocalhost } from "../../utils/url"

const s: any = {
  "data": []
}

export const stub = {
  isOn: () => {
    const on = true

    return isLocalhost() && on === true
  },

  get: () => {
    return Promise.resolve(s)
  } 
} 