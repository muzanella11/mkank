import endpoint from '../endpoint'
import resource from '../resource'
import axios from 'axios'

const AxiosCancelToken = axios.CancelToken
const NAMESPACE = 'AUTH'

export default {
  signin (data) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_SIGNIN`
    const request = resource.post(`${endpoint.auth.signin}`, data, {
      cancelToken: new AxiosCancelToken(cancelRequest => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  },

  signup (data) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_SIGNUP`
    const request = resource.post(`${endpoint.auth.signup}`, data, {
      cancelToken: new AxiosCancelToken(cancelRequest => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  }
}
