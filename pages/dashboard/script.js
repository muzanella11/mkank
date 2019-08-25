import EnemSearch from '~/components/search/template.vue'
import EnemHomeList from '~/components/home/list/template.vue'
import EnemHomeMap from '~/components/home/map/template.vue'
import EnemFilterSticky from '~/components/filtersticky/template.vue'
import EnemCurrentLocation from '~/components/currentlocation/template.vue'
import EnemCalculator from '~/components/cards/cardcalculator/template.vue'
import EnemCarouselProperty from '~/components/carousel/carouselproperty/template.vue'

export default {
  components: {
    EnemSearch,
    EnemHomeList,
    EnemHomeMap,
    EnemFilterSticky,
    EnemCurrentLocation,
    EnemCalculator,
    EnemCarouselProperty
  },

  data () {
    return {
      filters: {
        keywords: '',
        status: 'buy',
        type: 'list'
      }
    }
  },

  computed: {
    filterType () {
      return this.filters.type
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
      this.$router.push({ path: '/calculator' })
    }
  }
}
