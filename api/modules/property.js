import endpoint from '../endpoint'
import resource from '../resource'
import axios from 'axios'

const AxiosCancelToken = axios.CancelToken
const NAMESPACE = 'PROPERTY'

export default {
  detail (param) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_FETCH_DETAIL`
    const request = resource.get(`${endpoint.property.detail}/${param}`, {
      cancelToken: new AxiosCancelToken(cancelRequest => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  }
}
