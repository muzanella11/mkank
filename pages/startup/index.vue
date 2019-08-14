<template>
  <div class="l-startup">
    <v-app-bar
      flat
      class="startup__toolbar"
    >
      <v-btn
        v-if="!isChooseLang"
        icon
        @click="backStep"
      >
        <v-icon light>
          mdi-arrow-left
        </v-icon>
      </v-btn>
    </v-app-bar>

    <section class="startup__header">
      <div
        v-if="!isChooseLang"
        class="greetings"
      >
        {{ entries.greetings }}
      </div>
      <div class="brand">
        <brand-logo />
      </div>
    </section>
    <section class="startup__content">
      <div class="content-wrapper">
        <enem-card-on-boarding :entries="entries.boardingData" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
