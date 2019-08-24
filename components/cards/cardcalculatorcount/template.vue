<template>
  <enem-cards class="c-card-calculator">
    <div
      class="calculator-wrapper"
    >
      <v-layout
        wrap
        class="wrapper-content"
      >
        <v-flex
          xs3
          sm6
          class="content__logo"
        >
          <img
            src="~/assets/images/calculator.svg"
            alt="logo-calculator"
          >
        </v-flex>

        <v-flex
          xs9
          sm6
          class="content__title"
        >
          <div class="content__counter">
            <div class="counter-total-loan">
              Total Loan <span class="price">3000 QAR</span>
            </div>
            <div class="counter-per-month">
              <span class="price">3000 QAR</span> / Month
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
