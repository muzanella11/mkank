<template>
  <v-app>
    <v-app-bar
      class="c-header"
      fixed
      app
    >
      <a
        class="header__brand"
        href="javascript:;"
      >
        <brand-logo class="brand-image" />
      </a>

      <v-spacer />

      <a
        class="header__account"
        href="javascript:;"
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

    <v-bottom-navigation
      v-model="bottomNav"
      fixed
      color="#7C0A27"
    >
      <v-btn value="explore">
        <span>Explore</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn value="dashboard">
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import BrandLogo from '~/components/BrandLogo.vue'

export default {
  components: {
    BrandLogo
  },

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
  }
}
</script>
