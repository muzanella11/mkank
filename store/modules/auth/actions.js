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
          const data = response.data.success
          console.info('signin : ', response)
          Store.set('MKANK_TOKEN', data.token)
          Store.set('USER_DATA', JSON.stringify({ name: data.name }))
          resolve(response)
        }, error => {
          console.info('signin err : ', error)
          Store.remove('MKANK_TOKEN')
          Store.remove('USER_DATA')
          reject(error)
        })
    })
  },

  [AUTHTYPES.FETCH_SIGNUP] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      Api.auth.signup(payload)
        .then(response => {
          console.info('signup : ', response)
          resolve(response)
        }, error => {
          console.info('signup err : ', error)
          reject(error)
        })
    })
  }
}
