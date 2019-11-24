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
      <!-- Begin Show Trends -->
      <section
        class="content-section show-trend"
      >
        <header class="content-section__header">
          <v-layout
            wrap
            class="header-content"
          >
            <v-flex
              xs6
              sm6
            >
              <button class="action-trend">
                <span class="big-text text-primary">87</span> listing views in the past month
              </button>
            </v-flex>

            <v-flex
              xs6
              sm6
            >
              <button class="action-trend">
                <span class="big-text text-secondary">+100%</span> from last week
              </button>
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="header-content"
          >
            <v-flex
              xs12
              sm12
              class="header-content__action"
              :class="[isShowTrend ? 'active' : '']"
            >
              <v-flex
                v-show="isShowTrend"
                xs12
                sm12
                class="header-content__content-toggle"
              >
                <enem-chart-line />
              </v-flex>

              <v-btn
                text
                x-small
                class="action-center"
                @click="toggleTrend"
              >
                <v-icon>
                  {{ isShowTrend ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
                {{ wordingShowTrend }}
              </v-btn>
            </v-flex>
          </v-layout>
        </header>
      </section>
      <!-- End Show Trends -->

      <!-- Begin My Listing -->
      <section
        v-if="role === 'seller'"
        class="content-section my-listing"
      >
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
              My Listings
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

          <v-layout
            wrap
            class="list-button"
          >
            <v-flex
              xs4
              sm4
            >
              <v-btn
                outlined
                small
                class="action-btn"
              >
                Draft <br>
                8
              </v-btn>
            </v-flex>
            <v-flex
              xs4
              sm4
            >
              <v-btn
                outlined
                small
                class="action-btn"
              >
                Published <br>
                8
              </v-btn>
            </v-flex>
            <v-flex
              xs4
              sm4
            >
              <v-btn
                outlined
                small
                class="action-btn"
              >
                Sold <br>
                8
              </v-btn>
            </v-flex>
          </v-layout>
        </header>

        <div class="content-section__main saved-collections">
          <enem-carousel-property />
        </div>
      </section>
      <!-- End My Listing -->

      <section
        v-else
        class="content-section"
      >
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
