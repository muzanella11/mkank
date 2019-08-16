import {
  GET_ENTRIES_FEATURE,
  GET_FILTERS_FEATURE
} from './types'

export default {
  [GET_ENTRIES_FEATURE] (state) {
    return state.entries
  },

  [GET_FILTERS_FEATURE] (state) {
    return state.filters
  }
}
