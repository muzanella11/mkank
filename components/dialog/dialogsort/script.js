export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      dialog: false,
      listSort: [
        {
          label: 'Most Relevant',
          value: 'relevant'
        },
        {
          label: 'Most Popular',
          value: 'popular'
        },
        {
          label: 'Newest',
          value: 'newest'
        },
        {
          label: 'Lowest Price',
          value: 'lowest'
        },
        {
          label: 'Highest Price',
          value: 'highest'
        },
        {
          label: 'Area Size ( Biggest to Smallest )',
          value: 'areaup'
        },
        {
          label: 'Area Size ( Smallest to Biggest )',
          value: 'areadown'
        }
      ]
    }
  },

  watch: {
    'value': {
      deep: true,
      handler (val) {
        this.dialog = val
      }
    },

    'dialog' (val) {
      this.$emit('input', val)
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.dialog = this.value
    }
  }
}
