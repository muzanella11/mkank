<template>
  <enem-cards class="c-card-property">
    <div
      class="property__image"
    >
      <div
        class="image"
        :style="{ background: `url(${propertyImage}) no-repeat center center / cover`}"
      />
      <div
        v-if="propertyLabel"
        class="image-desc top"
      >
        {{ propertyLabel }}
      </div>

      <div
        v-if="propertyPrice"
        class="image-desc bottom"
      >
        {{ propertyPrice }}
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
            {{ propertyAddress }}
          </div>

          <div class="content-amenities">
            <ul class="amenities-list">
              <li>
                <v-icon>mdi-hotel</v-icon>
                <label class="counter">
                  {{ propertyBedroom }}
                </label>
              </li>
              <li>
                <v-icon>mdi-shower</v-icon>
                <label class="counter">
                  {{ propertyBathroom }}
                </label>
              </li>
              <li>
                <v-icon>mdi-car</v-icon>
                <label class="counter">
                  {{ propertyCarpark }}
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
