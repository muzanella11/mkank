<template>
  <div class="l-dashboard">
    <div class="dashboard-header">
      <!-- Begin Current Location -->
      <enem-current-location />
      <!-- End Current Location -->

      <!-- Begin Search -->
      <enem-search
        :is-dashboard="true"
        :value="filters"
        @input="setFilter"
      />
      <!-- End Search -->
    </div>

    <div class="dashboard-content">
      <section class="content-section">
        <header class="content-section__header">
          <v-layout
            wrap
            class="header-content"
          >
            <v-flex
              xs10
              sm10
              class="header-content__title"
            >
              Saved Collections
            </v-flex>

            <v-flex
              xs2
              sm2
              class="header-content__action"
            >
              <v-btn
                text
                x-small
              >
                See All
              </v-btn>
            </v-flex>
          </v-layout>
        </header>

        <div class="content-section__main saved-collections">
          <enem-carousel-property />
        </div>
      </section>

      <section class="content-section">
        <header class="content-section__header">
          <v-layout
            wrap
            class="header-content"
          >
            <v-flex
              xs10
              sm10
              class="header-content__title"
            >
              Installment Calculator
            </v-flex>
          </v-layout>
        </header>

        <div class="content-section__main">
          <a
            href="javascript:;"
            class="action-calculator"
            @click="calculatorCountPage"
          >
            <enem-calculator />
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
