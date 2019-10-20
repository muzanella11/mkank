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
            class="m-top-20 outline-color"
            xs12
            sm12
          >
            <v-text-field
              label="Enter the location name"
              single-line
              outlined
            />
          </v-flex>
          <v-flex
            class="m-top-20"
            xs12
            sm12
          >
            Map View
          </v-flex>
          <v-flex
            class="m-top-20 outline-color all-border"
            xs12
            sm12
          >
            <v-img
              src="https://picsum.photos/id/11/500/300"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="100%"
              max-height="259%"
            />
          </v-flex>
        </v-layout>
        <div class="c-separator" />
        <v-row>
          <v-col
            cols="6"
            sm="6"
          >
            <v-text-field
              label="Latitude"
              color="darken-2"
            />
          </v-col>
          <v-col
            cols="6"
            sm="6"
          >
            <v-text-field
              label="Longitude"
              color="darken-2"
            />
          </v-col>
        </v-row>
        <div class="c-separator" />
        <div class="content-notes">
          <p>
            All information above are necessary and must be filled before procedding
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
