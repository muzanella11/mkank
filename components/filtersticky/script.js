import { mapState, mapMutations } from 'vuex'
import * as EXPLORE from '~/store/modules/explore/types'
import EnemDialogFilter from '~/components/dialog/dialogfilter/template.vue'
import EnemDialogSort from '~/components/dialog/dialogsort/template.vue'

export default {
  components: {
    EnemDialogFilter,
    EnemDialogSort
  },

  data () {
    return {
      dialogFilter: false,
      dialogSort: false
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
    },

    setDialogSort (val) {
      this.dialogSort = val
    }
  }
}
