import axios from 'axios'

export const me = (token:any) => {
  let query = `query {
    me {email}
  }`

  let headers = {
    'token': token
  }

  return callAPI(query, headers)
}

export const graphqlSignIn = (userEmail: any, password: any) => {
  let query = `query {
    signIn(email:"${userEmail}", password:"${password}") {
      token
    }
  }`

  return callAPI(query)
}

export const graphqlSignUp = (userEmail: any, password: any) => {
  let mutation = `mutation {
    signUp(email:"${userEmail}", password:"${password}") {
      token
    }
  }`

  return callAPI(mutation)
}

const callAPI = async (query:any, headers:any = undefined) => {
  try {
    const res = await axios.post('http://localhost:4400', 
    { query: query }, { headers: headers })

    console.log(res)

    if (!res.data.data) {
      return Promise.reject(res)
    }
    
    return res.data.data
  }
  catch (error) {
    console.error(error)
    
    return Promise.reject(error)
  }
}