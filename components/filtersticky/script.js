import { mapState, mapMutations } from 'vuex'
import * as EXPLORE from '~/store/modules/explore/types'

export default {
  data () {
    return {
      //
    }
  },

  computed: {
    ...mapState({
      showLegend: state => state.explore.showLegend
    })
  },

  methods: {
    ...mapMutations({
      setExploreState: EXPLORE.SET_STATE
    }),

    setShowLegend (val) {
      this.setExploreState({ accessor: 'showLegend', value: val })
    }
  }
}
