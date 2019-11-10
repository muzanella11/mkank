<template>
  <v-app id="enMainPage">
    <v-content
      ref="mainContent"
      class="main blank"
    >
      <nuxt />
    </v-content>

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
