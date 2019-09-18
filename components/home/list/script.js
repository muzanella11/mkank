import EnemCardProperty from '~/components/cards/cardproperty/template.vue'
import { mapActions, mapGetters } from 'vuex'
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
    this.fetchResource()
  },

  computed: {
    ...mapGetters({
      entries: TYPES.GET_ENTRIES_FEATURE
    })
  },

  methods: {
    ...mapActions({
      fetchResource: TYPES.FETCH_LIST_BUYER
    }),

    getPropertyUrl (item) {
      return item.id ? `/property/${item.id}/detail` : 'javascript:;'
    }
  }
}
