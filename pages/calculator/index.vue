<template>
  <div class="l-calculator">
    <v-app-bar
      fixed
      class="calculator__toolbar"
    >
      <v-btn
        icon
        @click="backStep"
      >
        <v-icon light>
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-toolbar-title
        class="toolbar__title"
        v-html="`Installment Calculator`"
      />
    </v-app-bar>

    <section class="calculator__content">
      <div class="content-wrapper">
        <enem-card-calculator-count />

        <div class="content-notes">
          <v-icon>
            mdi-information
          </v-icon>
          This calculation is an estimation only
        </div>

        <div class="content-form">
          <v-layout
            class="content-form__wrapper"
            wrap
          >
            <v-flex
              class="content-form__item"
              xs12
              sm6
            >
              <v-text-field
                outlined
                label="Property Price"
              />
            </v-flex>
          </v-layout>

          <v-layout
            class="content-form__wrapper"
            wrap
          >
            <v-flex
              class="content-form__item"
              xs8
              sm6
            >
              <v-text-field
                outlined
                label="Downpayment"
              />
            </v-flex>

            <v-flex
              class="content-form__item or"
              xs2
              sm6
            >
              or
            </v-flex>

            <v-flex
              class="content-form__item"
              xs2
              sm6
            >
              <v-text-field
                outlined
                label="%"
              />
            </v-flex>
          </v-layout>

          <v-layout
            class="content-form__wrapper"
            wrap
          >
            <v-flex
              class="content-form__item"
              xs12
              sm6
            >
              <v-text-field
                outlined
                label="Interest Rate"
              />
            </v-flex>
          </v-layout>

          <v-layout
            class="content-form__wrapper"
            wrap
          >
            <v-flex
              class="content-form__item"
              xs12
              sm6
            >
              <v-text-field
                outlined
                label="Loan Term"
              />
            </v-flex>
          </v-layout>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
