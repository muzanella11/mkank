import EnemCarouselProperty from '~/components/carousel/carouselproperty/template.vue'

export default {
  props: {
    isDashboard: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: () => ({
        keywords: '',
        status: 'buy',
        type: 'list'
      })
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  components: {
    EnemCarouselProperty
  },

  data () {
    return {
      filters: {
        keywords: '',
        status: 'buy',
        type: 'list'
      },
      dialog: false,
      isViewMap: false,
      isLoading: false,
      searchFilter: [
        {
          label: 'Buy',
          value: 'buy'
        },
        {
          label: 'Rent',
          value: 'rent'
        }
      ]
    }
  },

  computed: {
    searchTypeIcon () {
      return this.isViewMap ? 'mdi-map-marker' : 'mdi-format-list-bulleted'
    }
  },

  watch: {
    'value': {
      deep: true,
      handler (val) {
        if (val) {
          this.filters = val
        }
      }
    },

    'isViewMap' () {
      this.setFilterType()
    },

    'loading' (val) {
      this.isLoading = val
    },

    'filters': {
      deep: true,
      handler (val) {
        this.$emit('input', val)
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.filters = this.value
    },

    searchTypeAction () {
      if (!this.isLoading) {
        this.isViewMap = !this.isViewMap
      }
    },

    setFilterType () {
      this.filters = Object.assign({}, this.filters, {
        type: this.isViewMap ? 'map' : 'list'
      })
    },

    setFilterStatus (item) {
      this.filters = Object.assign({}, this.filters, {
        status: item.value
      })
    }
  }
}
