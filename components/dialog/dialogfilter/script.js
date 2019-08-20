import EnemCarouselProperty from '~/components/carousel/carouselproperty/template.vue'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  components: {
    EnemCarouselProperty
  },

  data () {
    return {
      dialog: false,
      keywords: ''
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
