<template>
  <v-app id="enMainPage">
    <v-content
      ref="mainContent"
      class="main search"
    >
      <nuxt />
    </v-content>

    <v-bottom-navigation
      fixed
    >
      <v-btn
        small
        depressed
        width="100%"
        @click="setFilterType"
      >
        {{ labelBottomNavigation }}
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
