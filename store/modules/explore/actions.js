import * as EXPLORE from './types'
import Axios from 'axios'

export default {
  [EXPLORE.FETCH_EXAMPLE_FEATURE] ({ commit }, payload) {
    return 'anu'
  },

  [EXPLORE.FETCH_LIST_BUYER] ({ commit, state }) {
    const url = `/listbuyer/${state.filters.status === 'buy' ? 1 : 2}`

    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url: `//admin.mkankapp.com/api${url}`
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
  },

  [EXPLORE.FETCH_MAPS_BUYER] ({ commit, state }) {
    const url = `/buyermaps/${state.filters.status === 'buy' ? 1 : 2}`

    console.info('here maps')

    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url: `//admin.mkankapp.com/api${url}`
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
