import axios from 'axios'
import { message } from 'antd'
import { stub } from './catalogueStub'

export const getCodeCatalogue = async () => {
  const messageKey = 'getCodeCatalogue'

  try {
    message.loading({ content: 'Loading...', messageKey })

    let data

    if (stub.isOn()) {
      data = stub.get()
    }
    else {
      await axios.get('/catalogue')
    }
    
    message.success({ content: 'Loaded!', messageKey })

    return data
  }
  catch (error) {
    console.log('error', error)
    message.error({ content: 'Error!', messageKey })
  }
}