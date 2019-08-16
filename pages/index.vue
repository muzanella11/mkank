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

export default {
  components: {
    EnemSearch,
    EnemHomeList,
    EnemHomeMap,
    EnemFilterSticky
  },

  data () {
    return {
      filters: {
        keywords: '',
        status: 'buy',
        type: 'list'
      }
    }
  },

  computed: {
    filterType () {
      return this.filters.type
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.setFilterType()
    },

    setFilter (val) {
      if (val) {
        this.filters = val
      }
    },

    setFilterType () {
      this.filters = Object.assign({}, this.filters, {
        type: this.$route.query.type !== undefined ? this.$route.query.type : 'list'
      })
    }
  }
}
</script>
