import axios from 'axios'
import { message } from 'antd';

export const getCodeCatalogue = async () => {
  const messageKey = 'getCodeCatalogue'

  try {
    message.loading({ content: 'Loading...', messageKey })

    const data = await axios.get('/catalogue')

    message.success({ content: 'Loaded!', messageKey})

    return data
  } 
  catch(error) {
    console.log('error', error)
    message.error({ content: 'Error!', messageKey})
  }
}