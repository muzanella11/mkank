import * as EXPLORE from './types'
import Axios from 'axios'

export default {
  [EXPLORE.FETCH_EXAMPLE_FEATURE] ({ commit }, payload) {
    return 'anu'
  },

  [EXPLORE.FETCH_LIST_BUYER] ({ commit }) {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url: '//admin.mkankapp.com/api/listbuyer'
      })
        .then(response => {
          commit(EXPLORE.SET_STATE, { accessor: 'entries', value: response.data.message })
          resolve(response)
        })
        .catch(error => {
          commit(EXPLORE.SET_STATE, { accessor: 'entries', value: [] })
          reject(error)
        })
    })
  }
}
