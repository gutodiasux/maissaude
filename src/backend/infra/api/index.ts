import axios from 'axios'

function setupApiClient() {
  if (process.env.NODE_ENV !== 'production') {
    return axios.create({
      baseURL: 'http://localhost:3000/api'
    })
  } else {
    return axios.create({
      baseURL: 'https://maissaude-blue.vercel.app/api'
    })
  }

}

export const api = setupApiClient()
