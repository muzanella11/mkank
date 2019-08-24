<template>
  <div class="l-calculator">
    <v-app-bar
      fixed
      class="calculator__toolbar"
    >
      <v-btn
        icon
        @click="backStep"
      >
        <v-icon light>
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-toolbar-title
        class="toolbar__title"
        v-html="`Installment Calculator`"
      />
    </v-app-bar>

    <section class="calculator__content">
      <div class="content-wrapper">
        Calculator
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
