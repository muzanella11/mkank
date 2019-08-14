<template>
  <div class="c-filter">
    <v-layout
      wrap
      class="filter__list-button"
    >
      <v-flex
        v-ripple
        xs4
        sm6
        class="list-button__item"
      >
        <v-icon>mdi-sort-ascending</v-icon>
        <label class="item__title">
          Sort
        </label>
      </v-flex>

      <v-flex
        v-ripple
        xs4
        sm6
        class="list-button__item"
      >
        <v-icon>mdi-filter</v-icon>
        <label class="item__title">
          Filter
        </label>
      </v-flex>

      <v-flex
        v-ripple
        xs4
        sm6
        class="list-button__item"
      >
        <v-icon>mdi-help</v-icon>
        <label class="item__title">
          Help
        </label>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
