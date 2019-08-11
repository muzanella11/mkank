<template>
  <div
    class="l-auth auth-signin"
    :class="[roleActive !== 'buyer' ? 'auth--seller' : 'auth--buyer' ]"
  >
    <v-app-bar
      fixed
      class="auth__toolbar"
    >
      <v-btn
        class="toolbar__button"
        icon
        @click="backStep"
      >
        <v-icon light>
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-toolbar-title
        class="toolbar__title"
        v-html="toolbarTitle"
      />
    </v-app-bar>

    <section class="auth__header" />

    <section class="auth__content">
      <div class="content-wrapper">
        <enem-card-on-boarding />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
