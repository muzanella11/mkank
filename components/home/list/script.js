import EnemCardProperty from '~/components/cards/cardproperty/template.vue'

export default {
  props: {
    noFilter: {
      type: Boolean,
      default: false
    }
  },

  components: {
    EnemCardProperty
  },

  data () {
    return {}
  }
}
