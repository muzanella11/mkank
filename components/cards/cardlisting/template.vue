<template>
  <enem-cards class="c-card-authentication signup">
    <div class="authentication__content">
      <div
        class="c-wizard-diamond"
      >
        <ul class="wizard-diamond__list">
          <li>
            <div class="c-diamond">
              <span class="text">
                1
              </span>
            </div>
            <div class="list__wording text-small text-grey">
              Basic info
            </div>
          </li>
          <li>
            <div class="c-diamond">
              <span class="text">
                2
              </span>
            </div>
            <div class="list__wording text-small text-grey">
              Location
            </div>
          </li>
        </ul>
      </div>

      <div class="c-separator" />

      <div class="content-form">
        <v-layout
          class="content-form__seller-type"
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
                class="no-border active"
              >
                Owner
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
            >
              <v-btn
                class="no-border"
                width="100%"
              >
                Agent
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>

        <v-layout
          class="content-form__seller-type"
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
                class="no-border active"
              >
                Sell
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
            >
              <v-btn
                class="no-border"
                width="100%"
              >
                Rent
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>

        <v-layout
          class="content-form__seller-type"
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
                class="no-border"
              >
                Residential
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
            >
              <v-btn
                class="no-border"
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
          class="content-form__seller-type"
          wrap
        >
          <v-layout wrap>
            <v-flex
              xs6
              sm6
            >
              <v-btn
                class="category active-category"
                width="97%"
              >
                Apartment
              </v-btn>
            </v-flex>
            <v-flex
              class=""
              xs6
              sm6
            >
              <v-btn
                class="category"
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
                class="category"
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
                class="category"
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
          class="content-form__seller-type"
          wrap
        >
          <v-layout wrap>
            <v-flex
              class=""
              xs6
              sm6
            >
              <v-btn
                class="category active-category d-flex flex-no-wrap py-3"
                width="97%"
              >
                Residential
              </v-btn>
            </v-flex>
            <v-flex
              class=""
              xs6
              sm6
            >
              <v-btn
                class="category"
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
                class="category"
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
                class="category"
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
