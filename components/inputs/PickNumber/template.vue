<template>
  <div class="c-pick-number">
    <ul class="pick-number-list">
      <li
        v-for="(item, index) in numbers"
        :key="index"
        :style="`width: ${100/numbers}%`"
      >
        <v-btn
          outlined
          small
          width="100%"
        >
          {{ item }}+
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
