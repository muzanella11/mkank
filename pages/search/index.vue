<template>
  <div
    class="l-search"
    :class="[roleActive !== 'buyer' ? 'search--seller' : 'search--buyer' ]"
  >
    <v-app-bar
      fixed
      class="search-toolbar"
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

      <v-btn
        class="toolbar__button"
        icon
        @click="backStep"
      >
        <v-icon light>
          mdi-close
        </v-icon>
      </v-btn>
    </v-app-bar>

    <div class="search-content">
      <!-- Begin Home List -->
      <enem-home-list
        v-if="filterType === 'list'"
        :no-filter="true"
      />
      <!-- End Home List -->

      <!-- Begin Home Map -->
      <enem-home-map v-if="filterType === 'map'" />
      <!-- End Home Map -->

      <!-- Begin Filter -->
      <enem-filter-sticky />
      <!-- End Filter -->
    </div>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
