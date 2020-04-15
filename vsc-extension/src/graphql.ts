/* eslint-disable @typescript-eslint/semi */
import * as http from 'http'

export const signUp = (userEmail:any, password:any, tokenCB:any) => {
  let signUp = `mutation {
    signUp(email:${userEmail}, password:${password}) {
      token
    }
  }`

  let query = "mutation {signUp(email: 'test@outlook.com', password: 'password') {token}}"
  //JSON.stringify({signUp})

  callAPI(query, (data:any) => tokenCB(data))
}

const callAPI = (query: string, onData?: any, onError?: any) => {
  const options = {
    hostname: 'localhost',
    port: 4400,
    path: '',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': query.length
    }
  }

  const req = http.request(options, res => {
    let data = ''

    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', chunk => {
      process.stdout.write(chunk)
      console.log(chunk)
      data += chunk
    })

    res.on('end', () => {
      console.log('data:', JSON.parse(data))
      onData && onData(JSON.parse(data))
    })
  })

  req.on('error', error => {
    console.error(error)
    onError && onError(error)
  })

  req.write(query)
  req.end()
}