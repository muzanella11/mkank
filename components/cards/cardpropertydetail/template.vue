<template>
  <enem-cards class="c-card-property">
    <div
      class="property__image"
    >
      <div
        class="image"
        :style="{ background: `url('${propertyImage}') no-repeat center center / cover`}"
      />
      <div class="image-desc bottom">
        {{ entries.price }}
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
            {{ entries.title }}
          </div>

          <div class="content-amenities">
            <ul class="amenities-list">
              <li>
                <v-icon>mdi-hotel</v-icon>
                <label class="counter">
                  {{ entries.bedroom }}
                </label>
              </li>
              <li>
                <v-icon>mdi-shower</v-icon>
                <label class="counter">
                  {{ entries.bathroom }}
                </label>
              </li>
              <li>
                <v-icon>mdi-car</v-icon>
                <label class="counter">
                  {{ entries.carpark }}
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
              :src="entries.owner.image"
              alt="image"
              class="avatar"
            >
          </div>

          <div class="content-right__title">
            {{ entries.owner.name }}
          </div>

          <div class="content-right__agent">
            <img
              :src="entries.owner.icon"
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
