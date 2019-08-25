<template>
  <enem-cards class="c-card-listing">
    <div class="listing__content">
      <div
        class="c-wizard-diamond"
      >
        <ul
          class="wizard-diamond__list"
          :style="{transform: transformValue}"
        >
          <li
            v-for="(itemWizard, indexWizard) in entries.wizard"
            :key="indexWizard"
            :class="[indexWizard + 1 === wizardActive ? 'active' : '']"
          >
            <div class="c-diamond">
              <span class="text">
                {{ indexWizard + 1 }}
              </span>
            </div>
            <div class="list__wording text-small text-grey">
              {{ itemWizard }}
            </div>
          </li>
        </ul>
      </div>

      <div class="c-separator" />

      <div class="content-form">
        <v-layout
          class="content-form__item"
          wrap
        >
          <v-flex
            class="m-bottom-10"
            xs6
            sm6
          >
            Location
          </v-flex>
          <v-flex
            class="m-bottom-10"
            xs6
            sm6
            justify-content="right"
          >
            <a class="text-lg-right">Change</a>
          </v-flex>
          <v-flex
            class="m-top-20 outline-color"
            xs12
            sm12
          >
            <v-text-field
              label="West Bay, Doha"
              single-line
              outlined
            />
          </v-flex>
          <v-flex
            class="m-top-20 outline-color"
            xs12
            sm12
          >
            <v-text-field
              label="Al Tuwaim Street"
              single-line
              outlined
            />
          </v-flex>
        </v-layout>
        <div class="c-separator" />
        <v-layout
          class=""
          wrap
        >
          <v-flex
            class="m-top-20 outline-color"
            xs12
            sm12
          >
            <v-text-field
              label="Plot Area"
              single-line
              outlined
            />
          </v-flex>
          <v-flex
            class="m-top-20 outline-color"
            xs12
            sm12
          >
            <v-text-field
              label="Buily Up Are"
              single-line
              outlined
            />
          </v-flex>
          <v-flex
            class="m-top-20 outline-color"
            xs12
            sm12
          >
            <v-text-field
              label="Carpet Area"
              single-line
              outlined
            />
          </v-flex>
        </v-layout>
        <v-layout
          class="content-form__item"
          wrap
        >
          <v-flex
            class="m-bottom-10"
            xs12
            sm12
          >
            Bedroom
          </v-flex>

          <v-layout
            class="all-border"
            wrap
            outlinecolor="warning"
          >
            <v-flex
              xs3
              sm3
            >
              <v-btn
                width="100%"
                text
                class="item-action__button no-border active"
              >
                1
              </v-btn>
            </v-flex>

            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                width="100%"
                class="item-action__button no-border min-width"
              >
                2
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                3
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                4
              </v-btn>
            </v-flex>
            <v-flex
              xs3
              sm3
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                5+
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout
          class="content-form__item"
          wrap
        >
          <v-flex
            class="m-bottom-10"
            xs12
            sm12
          >
            Bathroom
          </v-flex>

          <v-layout
            class="all-border"
            wrap
            outlinecolor="warning"
          >
            <v-flex
              xs3
              sm3
            >
              <v-btn
                width="100%"
                text
                class="item-action__button no-border active"
              >
                1
              </v-btn>
            </v-flex>

            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                width="100%"
                class="item-action__button no-border min-width"
              >
                2
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                3
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                4
              </v-btn>
            </v-flex>
            <v-flex
              xs3
              sm3
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                5+
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout
          class="content-form__item"
          wrap
        >
          <v-flex
            class="m-bottom-10"
            xs12
            sm12
          >
            Balconies
          </v-flex>

          <v-layout
            class="all-border"
            wrap
            outlinecolor="warning"
          >
            <v-flex
              xs3
              sm3
            >
              <v-btn
                width="100%"
                text
                class="item-action__button no-border active"
              >
                1
              </v-btn>
            </v-flex>

            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                width="100%"
                class="item-action__button no-border min-width"
              >
                2
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                3
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                4
              </v-btn>
            </v-flex>
            <v-flex
              xs3
              sm3
            >
              <v-btn
                text
                class="item-action__button no-border min-width"
                width="100%"
              >
                5+
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout
          class="content-form__item"
          wrap
        >
          <v-flex
            class="m-bottom-10"
            xs12
            sm12
          >
            Other Rooms
          </v-flex>

          <v-layout
            class=""
            wrap
          >
            <v-flex
              xs6
              sm6
            >
              <v-checkbox
                v-model="checkbox"
                :label="`Study Room`"
                color="primary"
                value="primary"
              />
            </v-flex>
            <v-flex
              xs6
              sm6
            >
              <v-checkbox
                v-model="checkbox1"
                :label="`Servant Room`"
                color="primary"
                value="primary"
              />
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout
          class="content-form__item"
          wrap
        >
          <v-flex
            class="m-bottom-10"
            xs12
            sm12
          >
            Car Park
          </v-flex>

          <v-layout
            class=""
            wrap
          >
            <v-flex
              xs6
              sm6
            >
              <v-switch
                v-model="ex11"
                label="Have"
                color="primary"
                value="primary"
                hide-details
              />
            </v-flex>
            <v-flex
              xs6
              sm6
            >
              <v-switch
                v-model="ex11"
                label="Inside ?"
                color="primary"
                value="primary"
                hide-details
              />
            </v-flex>
          </v-layout>
        </v-layout>
        <div class="c-separator" />
        <div class="content-notes">
          <p>
            notes
          </p>
        </div>
      </div>

      <div class="content-action">
        <v-layout wrap>
          <v-flex
            xs12
            sm6
          >
            <v-btn
              depressed
              color="primary"
              class="action__button"
              width="100%"
            >
              Next Step
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
