import EnemCarouselProperty from '~/components/carousel/carouselproperty/template.vue'
import EnemSliderRange from '~/components/inputs/Sliders/template.vue'
import EnemPickNumber from '~/components/inputs/PickNumber/template.vue'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  components: {
    EnemCarouselProperty,
    EnemSliderRange,
    EnemPickNumber
  },

  data () {
    return {
      dialog: false,
      keywords: '',
      listFilterType: [
        {
          color: 'green',
          label: 'Home',
          value: 'home'
        },
        {
          color: 'blue',
          label: 'Apartement',
          value: 'apartement'
        },
        {
          color: 'red',
          label: 'Villa',
          value: 'villa'
        },
        {
          color: 'pink',
          label: 'Lands',
          value: 'lands'
        },
        {
          color: 'purple',
          label: 'Compound',
          value: 'compound'
        },
        {
          color: 'yellow',
          label: 'Comestores',
          value: 'comestores'
        },
        {
          color: 'orange',
          label: 'Office',
          value: 'office'
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
