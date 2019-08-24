<template>
  <div
    class="l-listing"
    :class="[roleActive !== 'seller' ? 'listing--seller' : 'listing--seller' ]"
  >
    <v-app-bar
      fixed
      class="listing__toolbar"
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

    <section class="listing__header" />

    <section class="listing__content">
      <div class="content-wrapper">
        <form-basic-info v-if="wizardActive === 1" />
        <form-location v-if="wizardActive === 2" />
        <form-details v-if="wizardActive === 3" />
        <form-photo v-if="wizardActive === 4" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
