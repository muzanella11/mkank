<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    transition="dialog-bottom-transition"
    scrollable
    content-class="c-dialog dialog-filter-sort"
  >
    <v-card tile>
      <v-toolbar>
        <v-btn
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer />
        <v-toolbar-title>
          Filter
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            dark
            text
            @click="dialog = false"
          >
            Reset
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <div class="dialog-content">
        <div class="dialog-content__container">
          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Locations
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <v-layout wrap>
                <v-flex
                  xs9
                  sm6
                >
                  <v-text-field
                    single-line
                    label="Al Muntazah Complex, Doha"
                  />
                </v-flex>

                <v-flex
                  xs3
                  sm6
                >
                  <v-btn
                    text
                    small
                    color="primary"
                  >
                    Change
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Type
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <ul class="content-list-type">
                <li
                  v-for="(item, index) in listFilterType"
                  :key="index"
                  :class="`list-type__item item--${item.color}`"
                >
                  <v-btn
                    outlined
                    small
                    width="100%"
                  >
                    {{ item.label }}
                  </v-btn>
                </li>
              </ul>
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Price
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <enem-slider-range />
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Plot Area
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <enem-slider-range />
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Built Up Area
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <enem-slider-range />
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Bedroom
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <enem-pick-number />
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Bathroom
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <enem-pick-number />
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__header"
            >
              Car Park
            </v-flex>

            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <enem-pick-number />
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-footer"
          >
            <v-flex
              xs6
              sm6
              class="dialog-footer__action"
            >
              <v-btn
                small
                depressed
                outlined
                width="100%"
              >
                clear
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
              class="dialog-footer__action"
            >
              <v-btn
                small
                depressed
                width="100%"
                color="primary"
              >
                Find
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
