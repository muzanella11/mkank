<template>
  <v-layout
    wrap
    class="c-sliders"
  >
    <v-flex
      xs12
      sm12
    >
      <v-range-slider
        v-model="range"
        :max="max"
        :min="min"
        hide-details
        class="align-center"
      >
        <template v-slot:prepend>
          {{ range[0] }}
        </template>
        <template v-slot:append>
          {{ range[1] }}
        </template>
      </v-range-slider>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
