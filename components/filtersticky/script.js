import { mapState, mapMutations } from 'vuex'
import * as EXPLORE from '~/store/modules/explore/types'
import EnemDialogFilter from '~/components/dialog/dialogfilter/template.vue'

export default {
  components: {
    EnemDialogFilter
  },

  data () {
    return {
      dialogFilter: false
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
    },

    setDialogFilter (val) {
      this.dialogFilter = val
    }
  }
}
