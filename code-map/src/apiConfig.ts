import axios from 'axios'

const baseUrl = {
  local: 'http://localhost:4400',
  development: '',
}

const setBaseUrl = () =>
  axios.defaults.baseURL = baseUrl.local
// uncomment if we want envir based config
//baseUrl[process.env.NODE_ENV]

const turnStub = (
  onOrOff: 'on' | 'off', 
  forUri: string, 
  method: 'get'|'post') => {
  axios.interceptors.request.use((config:any) => {
    let shouldIntercept =
      document.location.href.indexOf('localhost') > -1 &&
      onOrOff === 'on' &&
      config.method === method &&
      config.url === axios.defaults.baseURL + forUri

    config.shouldIntercept = shouldIntercept
    
    return config
  },
  (error:any) => Promise.reject(error)
  )
}