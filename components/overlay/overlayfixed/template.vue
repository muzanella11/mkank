<template>
  <v-overlay
    class="c-overlay"
    fixed
    :value="showLegend"
  >
    <slot />
  </v-overlay>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
