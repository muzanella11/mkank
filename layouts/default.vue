<template>
  <v-app>
    <v-app-bar
      class="c-header"
      fixed
      app
    >
      <a
        class="header__brand"
        href="/"
      >
        <brand-logo class="brand-image" />
      </a>

      <v-spacer />

      <a
        class="header__account"
        href="javascript:;"
        @click="actionAccount"
      >
        <span class="account-name">
          Nick long
        </span>
        <img
          class="account-avatar"
          src="https://randomuser.me/api/portraits/men/33.jpg"
          alt="image"
        >
      </a>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <enem-overlay-legend
      :value="showLegend"
      @input="setShowLegend"
    />

    <v-bottom-navigation
      v-model="bottomNav"
      fixed
      color="#7C0A27"
    >
      <v-btn
        value="explore"
        @click="changePage('explore')"
      >
        <span>Explore</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn
        value="dashboard"
        @click="changePage('dashboard')"
      >
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as EXPLORE from '~/store/modules/explore/types'
import BrandLogo from '~/components/BrandLogo.vue'
import EnemOverlayLegend from '~/components/overlay/overlaylegend/template.vue'
import PagesMixins from '~/mixins/pagesMixins'

export default {
  components: {
    BrandLogo,
    EnemOverlayLegend
  },

  mixins: [
    PagesMixins
  ],

  data () {
    return {
      bottomNav: 'explore',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  computed: {
    ...mapState({
      showLegend: state => state.explore.showLegend
    }),

    pageName () {
      return this.$route.name
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapMutations({
      setExploreState: EXPLORE.SET_STATE
    }),

    init () {
      this.bottomNav = this.pageName
    },

    setShowLegend (val) {
      this.setExploreState({ accessor: 'showLegend', value: val })
    },

    changePage (page) {
      if (page === 'explore') {
        window.location = '/'
      } else {
        window.location = '/dashboard'
      }
    },

    actionAccount () {
      window.location = '/logout'
    }
  }
}
</script>
