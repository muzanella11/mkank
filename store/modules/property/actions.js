import * as TYPES from './types'
import Axios from 'axios'

export default {
  [TYPES.FETCH_PROPERTY_DETAIL] ({ commit, state }, payload) {
    const url = `/detail/${payload}`

    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url: `//admin.mkankapp.com/api${url}`
      })
        .then(response => {
          commit(TYPES.SET_STATE, { accessor: 'propertyDetail', value: response.data.message })
          resolve(response)
        })
        .catch(error => {
          commit(TYPES.SET_STATE, { accessor: 'propertyDetail', value: {} })
          reject(error)
        })
    })
  }
}
