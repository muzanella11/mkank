import { mapGetters } from 'vuex'
import * as AUTHTYPES from '~/store/modules/auth/types'

export default {
  data () {
    return {
      //
    }
  },

  computed: {
    ...mapGetters({
      role: AUTHTYPES.GET_USER_ROLE
    })
  }
}
