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
            class="m-bottom-10 text-right"
            xs6
            sm6
          >
            Change
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
            sm12
            xs12
          >
            <v-flex
              xs5
              sm5
            >
              <v-switch
                label="Hide"
                color="primary"
                value="primary"
              />
            </v-flex>
            <div class="c-separator-center" />
            <v-flex
              xs5
              sm5
            >
              <v-switch
                label="Inside ?"
                color="primary"
                value="primary"
              />
            </v-flex>
          </v-layout>
          <v-layout
            class="all-border m-top-10"
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
                class="item-action__button no-border text-grey"
              >
                1+
              </v-btn>
            </v-flex>

            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                width="100%"
                class="item-action__button no-border min-width text-grey"
              >
                2+
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width text-grey"
                width="100%"
              >
                3+
              </v-btn>
            </v-flex>
            <v-flex
              xs2
              sm2
            >
              <v-btn
                text
                class="item-action__button no-border min-width text-grey"
                width="100%"
              >
                4+
              </v-btn>
            </v-flex>
            <v-flex
              xs3
              sm3
            >
              <v-btn
                text
                class="item-action__button no-border min-width text-grey"
                width="100%"
              >
                5+
              </v-btn>
            </v-flex>
          </v-layout>
          <v-flex
            class="m-top-30"
            xs12
            sm12
          >
            Furnishing
          </v-flex>
          <v-layout
            class="all-border m-top-20"
            wrap
            outlinecolor="warning"
          >
            <v-flex
              xs4
              sm4
            >
              <v-btn
                width="100%"
                text
                class="item-action__button no-border active font-10"
              >
                Furnished
              </v-btn>
            </v-flex>
            <v-flex
              xs4
              sm4
            >
              <v-btn
                text
                width="100%"
                class="item-action__button no-border min-width font-10"
              >
                Semi Furnished
              </v-btn>
            </v-flex>
            <v-flex
              xs4
              sm4
            >
              <v-btn
                text
                class="item-action__button no-border min-width font-10"
                width="100%"
              >
                Unfurnished
              </v-btn>
            </v-flex>
          </v-layout>
          <v-flex
            class="m-top-50"
            xs12
            sm12
          >
            Facilities
          </v-flex>
          <v-flex
            xs12
            sm12
            class="term-text m-bottom-20"
          >
            * Multiple facilities can be chosen
          </v-flex>
          <v-layout wrap>
            <v-flex
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category"
                width="97%"
              >
                Internet
              </v-btn>
            </v-flex>
            <v-flex
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category"
                width="97%"
              >
                Pool
              </v-btn>
            </v-flex>
            <v-flex
              class="m-top-10"
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category"
                width="97%"
              >
                Air Conditioner
              </v-btn>
            </v-flex>
            <v-flex
              class="m-top-10"
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category"
                width="97%"
              >
                Water Storage
              </v-btn>
            </v-flex>
            <v-flex
              class="m-top-10"
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category"
                width="97%"
              >
                Visitor Parking
              </v-btn>
            </v-flex>
            <v-flex
              class="m-top-10"
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category"
                width="97%"
              >
                Park
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
        <div class="c-separator" />
        <v-layout wrap>
          <v-flex
            class="m-top-10 outline-color"
            xs12
            sm12
          >
            <v-text-field
              label="Price"
              single-line
              outlined
              hint="* Price suggested for this type of property is around : 300.000 QAR - 350.000 QAR"
              persistent-hint
            />
          </v-flex>
        </v-layout>
        <div class="c-separator" />
        <v-layout wrap>
          <v-flex
            class="m-top-10 outline-color"
            xs12
            sm12
          >
            <v-textarea
              label="Optional Description"
              auto-grow
              outlined
              rows="1"
              row-height="150"
              class="m-bottom-0"
            />
          </v-flex>
          <v-flex
            class="text-right-bottom"
            xs12
            sm12
          >
            0/200
          </v-flex>
        </v-layout>
        <div class="c-separator" />
        <div class="content-notes">
          <p>
            All information above are neccesary and must be filled before proceeding
          </p>
        </div>
      </div>

      <div class="content-action">
        <v-layout wrap>
          <v-flex
            xs6
            sm6
          >
            <v-btn
              depressed
              class="action__button previous"
              @click="btnAction('prev')"
            >
              Previous Step
            </v-btn>
          </v-flex>
          <v-flex
            xs6
            sm6
          >
            <v-btn
              depressed
              color="primary"
              class="action__button"
              width="100%"
              @click="btnAction('next')"
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
