import * as SEARCH from '~/store/modules/search/types'
import { mapState, mapMutations } from 'vuex'
import PagesMixins from '~/mixins/pagesMixins'

export default {
  mixins: [
    PagesMixins
  ],

  data () {
    return {
      isViewMap: false
    }
  },

  computed: {
    ...mapState({
      searchFilter: state => state.search.filters
    }),

    filterType () {
      return this.isViewMap ? 'map' : 'list'
    },

    labelBottomNavigation () {
      return this.isViewMap ? 'Show List' : 'Show Map'
    }
  },

  mounted () {
    //
  },

  methods: {
    ...mapMutations({
      setSearchState: SEARCH.SET_STATE
    }),

    setTypes (val) {
      this.setSearchState({ accessor: 'filters.type', value: val })
    },

    setFilterType () {
      this.isViewMap = !this.isViewMap

      this.setTypes(this.filterType)
    }
  }
}
