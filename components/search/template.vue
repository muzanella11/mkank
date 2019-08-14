<template>
  <div class="c-search">
    <div class="search__wrapper-content">
      <div class="content-action">
        <v-layout
          class="action__filter"
          wrap
        >
          <v-flex
            xs6
            sm6
          >
            <v-btn
              depressed
              class="action__button active"
              width="100%"
            >
              Buy
            </v-btn>
          </v-flex>

          <v-flex
            xs6
            sm6
          >
            <v-btn
              depressed
              class="action__button"
              width="100%"
            >
              Rent
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout
          class="action__keywords"
          wrap
        >
          <v-flex
            xs10
            sm6
          >
            <v-text-field
              single-line
              outlined
              label="Search by location or building..."
              prepend-inner-icon="mdi-magnify"
            />
          </v-flex>

          <v-flex
            xs2
            sm6
          >
            <v-btn
              class="keywords__filter-action"
              outlined
              fab
              small
              color="#949393"
            >
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
