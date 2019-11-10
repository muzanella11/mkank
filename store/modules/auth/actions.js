import * as AUTHTYPES from './types'
import Api from '~/api'
import Store from 'store'

export default {
  [AUTHTYPES.FETCH_AUTH_FEATURE] ({ commit }, payload) {
    return 'anu'
  },

  [AUTHTYPES.FETCH_SIGNIN] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      Api.auth.signin(payload)
        .then(response => {
          console.info('signin : ', response)
          Store.set('MKANK_TOKEN', response.data.success.token)
          resolve(response)
        }, error => {
          console.info('signin err : ', error)
          Store.remove('MKANK_TOKEN')
          reject(error)
        })
    })
  }
}
