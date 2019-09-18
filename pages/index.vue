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
import * as EXPLORETYPES from '~/store/modules/explore/types'
import { mapState, mapMutations } from 'vuex'

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

    filterType () {
      return this.filters.type
    }
  },

  mounted () {
    this.init()
  },

  methods: {
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
