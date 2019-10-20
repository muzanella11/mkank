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
            xs12
            sm12
          >
            You Are ?
          </v-flex>

          <v-layout
            class="all-border"
            wrap
            outlinecolor="warning"
          >
            <v-flex
              xs6
              sm6
            >
              <v-btn
                width="100%"
                text
                class="item-action__button no-border active"
              >
                Owner
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button no-border"
                width="100%"
              >
                Agent
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
            List Property for
          </v-flex>

          <v-layout
            class="all-border"
            wrap
            outlinecolor="warning"
          >
            <v-flex
              class=""
              xs6
              sm6
            >
              <v-btn
                width="100%"
                text
                class="item-action__button no-border active"
              >
                Sell
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button no-border"
                width="100%"
              >
                Rent
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
            Property Type
          </v-flex>

          <v-layout
            class="all-border"
            wrap
            outlinecolor="warning"
          >
            <v-flex
              xs6
              sm6
            >
              <v-btn
                width="100%"
                text
                class="item-action__button no-border"
              >
                Residential
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button no-border"
                width="100%"
              >
                Commercial
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>

        <v-layout wrap>
          <v-flex
            xs12
            sm12
            class="t-renogare-soft"
          >
            Category
          </v-flex>
          <v-flex
            xs12
            sm12
            class="term-text m-bottom-20"
          >
            * Property listed only can have 1 category
          </v-flex>
        </v-layout>

        <v-layout
          class="content-form__item"
          wrap
        >
          <v-layout wrap>
            <v-flex
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category active"
                width="97%"
              >
                Apartment
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
                House/Villa
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
                Residential Lan
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
                Leisure
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>

        <v-layout wrap>
          <v-flex
            xs12
            sm12
            class="t-renogare-soft"
          >
            Apartment Type
          </v-flex>
          <v-flex
            xs12
            sm12
            class="term-text m-bottom-20"
          >
            * Property listed only can have 1 type
          </v-flex>
        </v-layout>

        <v-layout
          class="content-form__item"
          wrap
        >
          <v-layout wrap>
            <v-flex
              xs6
              sm6
            >
              <v-btn
                text
                class="item-action__button category active d-flex flex-no-wrap py-3"
                width="97%"
              >
                Residential
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
                House/Villa
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
                Residential Lan
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
                Leisure
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>

        <div class="c-separator" />

        <div class="content-notes">
          <p>
            All information above are necessary and must be filled before proceeding
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
