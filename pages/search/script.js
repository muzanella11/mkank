import { mapState } from 'vuex'
import EnemCardSignin from '~/components/cards/cardsignin/template.vue'
import EnemHomeList from '~/components/home/list/template.vue'
import EnemHomeMap from '~/components/home/map/template.vue'
import EnemFilterSticky from '~/components/filterstickysearch/template.vue'

export default {
  layout: 'search/template',

  components: {
    EnemCardSignin,
    EnemHomeList,
    EnemHomeMap,
    EnemFilterSticky
  },

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapState({
      filters: state => state.search.filters
    }),

    toolbarTitle () {
      return 'Al Muntazah Complex, Doha'
    },

    roleActive () {
      const role = this.$route.query.role
      return role === undefined ? 'buyer' : role.toLowerCase()
    },

    filterType () {
      return this.filters.type
    }
  },

  methods: {
    backStep () {
      window.location = '/startup'
    }
  }
}
