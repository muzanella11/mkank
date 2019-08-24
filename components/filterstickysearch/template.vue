<template>
  <div class="c-filter">
    <v-layout
      wrap
      class="filter__list-button"
    >
      <v-flex
        v-ripple
        xs4
        sm4
        class="list-button__item"
        @click="dialogTypes = true"
      >
        <v-icon>mdi-shape</v-icon>
        <label class="item__title">
          Types
        </label>
      </v-flex>

      <v-flex
        v-ripple
        xs4
        sm4
        class="list-button__item"
        @click="dialogSort = true"
      >
        <v-icon>mdi-sort-ascending</v-icon>
        <label class="item__title">
          Sort
        </label>
      </v-flex>

      <v-flex
        v-ripple
        xs4
        sm4
        class="list-button__item"
        @click="dialogFilter = true"
      >
        <v-icon>mdi-filter</v-icon>
        <label class="item__title">
          Filter
        </label>
      </v-flex>
    </v-layout>

    <!-- Begin Dialog Types -->
    <enem-dialog-types
      :value="dialogTypes"
      @input="setDialogTypes"
    />
    <!-- End Dialog Types -->

    <!-- Begin Dialog Filter -->
    <enem-dialog-filter
      :value="dialogFilter"
      @input="setDialogFilter"
    />
    <!-- End Dialog Filter -->

    <!-- Begin Dialog Sort -->
    <enem-dialog-sort
      :value="dialogSort"
      @input="setDialogSort"
    />
    <!-- End Dialog Sort -->
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
