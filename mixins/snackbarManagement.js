import { mapState, mapMutations } from 'vuex'
import * as TYPES from '~/store/types'

export default {
  data () {
    return {}
  },

  computed: {
    ...mapState({
      snackbarOptions: state => state.snackbarOptions
    })
  },

  method: {
    ...mapMutations({
      setSnackbarState: TYPES.SET_STATE
    }),

    setSnackbar (config) {
      this.setSnackbarState({ accessor: config.accessor, value: config.value })
    }
  }
}
