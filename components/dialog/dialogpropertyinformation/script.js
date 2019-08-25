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
      listTypes: []
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
