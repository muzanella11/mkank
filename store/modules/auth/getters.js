import { GET_ENTRIES_FEATURE, GET_TOKEN, GET_USER_DATA, GET_USER_ROLE } from './types'
import Store from 'store'

export default {
  [GET_ENTRIES_FEATURE] (state) {
    return state.entries
  },

  [GET_TOKEN] () {
    return Store.get('MKANK_TOKEN')
  },

  [GET_USER_DATA] (state) {
    return JSON.parse(Store.get('USER_DATA'))
  },

  [GET_USER_ROLE] (state) {
    return Store.get('role') || ''
  }
}
