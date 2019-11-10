import * as TYPES from './types'
import Api from '~/api'

export default {
  [TYPES.FETCH_PROPERTY_DETAIL] ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      Api.property.detail(payload)
        .then(response => {
          commit(TYPES.SET_STATE, { accessor: 'propertyDetail', value: response.data.message })
          resolve(response)
        }, error => {
          commit(TYPES.SET_STATE, { accessor: 'propertyDetail', value: {} })
          reject(error)
        })
    })
  }
}
