<template>
  <enem-cards class="c-card-property">
    <div
      class="property__image"
    >
      <div
        class="image"
        style="background: url('https://cdn.zeplin.io/5d4dadc08d5c26520b4806e2/assets/C3AE7EF9-3F32-44DE-A35C-D0A658D7C221.png') no-repeat center center / cover"
      />
      <div class="image-desc top">
        House
      </div>
      <div class="image-desc bottom">
        300.000 QAR
      </div>
    </div>

    <div class="property__content">
      <v-layout
        wrap
      >
        <v-flex
          xs9
          sm12
          class="content-left"
        >
          <div class="content-title">
            Al Muntazah Complex, Doha
          </div>

          <div class="content-amenities">
            <ul class="amenities-list">
              <li>
                <v-icon>mdi-hotel</v-icon>
                <label class="counter">
                  8
                </label>
              </li>
              <li>
                <v-icon>mdi-shower</v-icon>
                <label class="counter">
                  8
                </label>
              </li>
              <li>
                <v-icon>mdi-car</v-icon>
                <label class="counter">
                  8
                </label>
              </li>
            </ul>
          </div>
        </v-flex>

        <v-flex
          v-if="agentDetail"
          xs3
          sm12
          class="content-right"
        >
          <div class="content-right__avatar">
            <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="image"
              class="avatar"
            >
          </div>

          <div class="content-right__title">
            Nick long
          </div>

          <div class="content-right__agent">
            <img
              src="https://cdn2.bigcommerce.com/server1500/ac84d/products/1203/images/2686/Adidas_Logo_Stack__93206.1337144792.380.380.jpg?c=2"
              alt="agent"
              class="agent"
            >
          </div>
        </v-flex>
      </v-layout>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
