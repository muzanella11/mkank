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

    <v-snackbar
      v-model="snackbarOptions.isShown"
      :top="true"
      :color="snackbarOptions.color"
    >
      {{ snackbarOptions.text }}
      <v-btn
        :color="snackbarOptions.buttonColor"
        text
        @click="snackbarOptions.isShown = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
