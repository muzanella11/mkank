<template>
  <div class="c-current-location">
    <v-layout
      wrap
      class="current-location__wrapper"
    >
      <v-flex
        v-if="role !== 'seller'"
        xs8
        sm8
        class="wrapper-content input"
      >
        <v-layout
          wrap
          class="wrapper-content__input"
        >
          <v-flex
            xs1
            sm1
            class="input-icon"
          >
            <v-icon>
              mdi-map-marker
            </v-icon>
          </v-flex>

          <v-flex
            xs11
            sm11
            class="input-description"
          >
            <div class="description__label">
              Current Location
            </div>
            <div class="description__place">
              Bali, Indonesia
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex
        v-else
        class="wrapper-content profile"
      >
        <v-layout
          wrap
          class="wrapper-content__profile"
        >
          <div class="avatar">
            <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="image"
              class="account-avatar"
            >
          </div>
          <div class="title">
            Anu gemas
          </div>
        </v-layout>
      </v-flex>

      <v-flex
        v-if="role !== 'seller'"
        xs4
        sm4
        class="wrapper-content action"
      >
        <v-layout
          wrap
          class="wrapper-content__action"
        >
          <v-flex
            xs12
            sm12
            class="action-button"
          >
            <v-btn
              outlined
              small
              color="white"
            >
              Show Map
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
