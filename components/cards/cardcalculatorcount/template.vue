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
            <div class="counter-total-loan no-border">
              <v-layout
                wrap
              >
                <v-flex
                  sm6
                  xs7
                >
                  Total Sale Profit
                </v-flex>
                <v-flex
                  sm6
                  xs5
                >
                  <span class="price">3000 QAR</span>
                </v-flex>
              </v-layout>
            </div>
            <div class="counter-total-loan">
              <v-layout
                wrap
              >
                <v-flex
                  sm6
                  xs7
                >
                  Total Rent Profit
                </v-flex>
                <v-flex
                  sm6
                  xs5
                >
                  <span class="price">3000 QAR</span>
                </v-flex>
              </v-layout>
            </div>
            <div class="counter-per-month">
              <v-layout
                wrap
              >
                <v-flex
                  sm6
                  xs7
                >
                  Total Profit
                </v-flex>
                <v-flex
                  sm6
                  xs5
                >
                  <span class="price">3000 QAR</span>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
