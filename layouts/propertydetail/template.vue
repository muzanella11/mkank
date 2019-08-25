<template>
  <v-app id="enMainPage">
    <v-content
      ref="mainContent"
      class="main property-detail"
    >
      <nuxt />
    </v-content>

    <v-bottom-navigation
      fixed
      class="c-property-detail-bottom-nav"
    >
      <v-btn
        small
        outlined
        color="primary"
        width="50%"
        height="100%"
        class="outlined"
      >
        Save to Collections
      </v-btn>

      <v-btn
        small
        depressed
        color="primary"
        width="50%"
        height="100%"
      >
        Enquiry
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
