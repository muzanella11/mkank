<template>
  <div class="l-home">
    <enem-search
      :value="filters"
      @input="setFilter"
    />

    <!-- Begin Home List -->
    <enem-home-list v-if="filterType === 'list'" />
    <!-- End Home List -->

    <!-- Begin Home Map -->
    <enem-home-map v-if="filterType === 'map'" />
    <!-- End Home Map -->

    <!-- Begin Filter -->
    <enem-filter-sticky />
    <!-- End Filter -->
  </div>
</template>

<script>
import EnemSearch from '~/components/search/template.vue'
import EnemHomeList from '~/components/home/list/template.vue'
import EnemHomeMap from '~/components/home/map/template.vue'
import EnemFilterSticky from '~/components/filtersticky/template.vue'
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
import * as EXPLORETYPES from '~/store/modules/explore/types'

export default {
  components: {
    EnemSearch,
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
      filters: state => state.explore.filters
    }),

    ...mapGetters({
      entries: EXPLORETYPES.GET_ENTRIES_FEATURE
    }),

    filterType () {
      return this.filters.type
    }
  },

  watch: {
    'filters': {
      deep: true,
      handler: function (val) {
        if (val.type === 'map') {
          this.fetchMapsBuyer()
        } else {
          this.fetchListBuyer()
        }
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapActions({
      fetchListBuyer: EXPLORETYPES.FETCH_LIST_BUYER,
      fetchMapsBuyer: EXPLORETYPES.FETCH_MAPS_BUYER
    }),

    ...mapMutations({
      setState: EXPLORETYPES.SET_STATE
    }),

    init () {
      this.setFilterType()
    },

    setFilter (val) {
      if (val) {
        this.setState({ accessor: 'filters', value: val })
      }
    },

    setFilterType () {
      const filters = Object.assign({}, this.filters, {
        type: this.$route.query.type !== undefined ? this.$route.query.type : 'list'
      })

      this.setFilter(filters)
    }
  }
}
</script>
