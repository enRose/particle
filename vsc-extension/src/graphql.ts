/* eslint-disable @typescript-eslint/semi */
import axios from 'axios'

export const signUp = (userEmail: any, password: any, cb: any) => {
  let signUp = `mutation {
    signUp(email:"${userEmail}", password:"${password}") {
      token
    }
  }`

  axios.post('http://localhost:4400', {query:signUp})
  .then((res:any) => {
    cb(res.data.data)
  })
  .catch((error) => {
    console.error(error)
  })
}