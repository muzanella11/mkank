export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      showLegend: false
    }
  },

  watch: {
    'value': {
      deep: true,
      handler (val) {
        this.showLegend = val
      }
    },

    'showLegend': {
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
      this.showLegend = this.value
    },

    setShowLegend (val) {
      this.showLegend = val
    }
  }
}
