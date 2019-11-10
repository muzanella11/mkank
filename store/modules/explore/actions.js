import * as EXPLORE from './types'
import Api from '~/api'

export default {
  [EXPLORE.FETCH_EXAMPLE_FEATURE] ({ commit }, payload) {
    return 'anu'
  },

  [EXPLORE.FETCH_LIST_BUYER] ({ commit, state }) {
    const param = state.filters.status === 'buy' ? 1 : 2

    return new Promise((resolve, reject) => {
      Api.explore.listBuyer(param)
        .then(response => {
          commit(EXPLORE.SET_STATE, { accessor: 'entries', value: response.data.message })
          resolve(response)
        }, error => {
          commit(EXPLORE.SET_STATE, { accessor: 'entries', value: [] })
          reject(error)
        })
    })
  },

  [EXPLORE.FETCH_MAPS_BUYER] ({ commit, state }) {
    const param = state.filters.status === 'buy' ? 1 : 2

    return new Promise((resolve, reject) => {
      Api.explore.buyerMaps(param)
        .then(response => {
          commit(EXPLORE.SET_STATE, { accessor: 'entries', value: response.data.message })
          resolve(response)
        }, error => {
          commit(EXPLORE.SET_STATE, { accessor: 'entries', value: [] })
          reject(error)
        })
    })
  }
}
