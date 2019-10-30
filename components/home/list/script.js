import EnemCardProperty from '~/components/cards/cardproperty/template.vue'
import { mapGetters } from 'vuex'
import * as TYPES from '~/store/modules/explore/types'

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
  },

  mounted () {
    //
  },

  computed: {
    ...mapGetters({
      entries: TYPES.GET_ENTRIES_FEATURE
    })
  },

  methods: {
    getPropertyUrl (item) {
      return item.id ? `/property/detail?q=${item.id}` : 'javascript:;'
    }
  }
}
