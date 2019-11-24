import EnemSearch from '~/components/search/template.vue'
import EnemHomeList from '~/components/home/list/template.vue'
import EnemHomeMap from '~/components/home/map/template.vue'
import EnemFilterSticky from '~/components/filtersticky/template.vue'
import EnemCurrentLocation from '~/components/currentlocation/template.vue'
import EnemCalculator from '~/components/cards/cardcalculator/template.vue'
import EnemCarouselProperty from '~/components/carousel/carouselproperty/template.vue'
import EnemChartLine from '~/components/chart/line/template.vue'
import { mapGetters } from 'vuex'
import * as AUTHTYPES from '~/store/modules/auth/types'

export default {
  components: {
    EnemSearch,
    EnemHomeList,
    EnemHomeMap,
    EnemFilterSticky,
    EnemCurrentLocation,
    EnemCalculator,
    EnemCarouselProperty,
    EnemChartLine
  },

  data () {
    return {
      filters: {
        keywords: '',
        status: 'buy',
        type: 'list'
      },
      isShowTrend: false
    }
  },

  computed: {
    ...mapGetters({
      userData: AUTHTYPES.GET_USER_DATA,
      role: AUTHTYPES.GET_USER_ROLE
    }),

    filterType () {
      return this.filters.type
    },

    wordingShowTrend () {
      return this.isShowTrend ? 'Hide Trends' : 'Show Trends'
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.setFilterType()
    },

    setFilter (val) {
      if (val) {
        this.filters = val
      }
    },

    setFilterType () {
      this.filters = Object.assign({}, this.filters, {
        type: this.$route.query.type !== undefined ? this.$route.query.type : 'list'
      })
    },

    calculatorCountPage () {
      window.location = '/calculator'
    },

    toggleTrend () {
      this.isShowTrend = !this.isShowTrend
    }
  }
}
