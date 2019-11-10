import endpoint from '../endpoint'
import resource from '../resource'
import axios from 'axios'

const AxiosCancelToken = axios.CancelToken
const NAMESPACE = 'EXPLORE'

export default {
  listBuyer (param) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_FETCH_LIST_BUYER`
    const request = resource.get(`${endpoint.explore.listBuyer}/${param}`, {
      cancelToken: new AxiosCancelToken(cancelRequest => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  },

  buyerMaps (param) {
    let cancel
    const CANCEL_TOKEN = `${NAMESPACE}_FETCH_BUYER_MAPS`
    const request = resource.get(`${endpoint.explore.buyerMaps}/${param}`, {
      cancelToken: new AxiosCancelToken(cancelRequest => {
        cancel = cancelRequest
      })
    })

    window[CANCEL_TOKEN] = cancel

    return request
  }
}
