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
            Details
          </v-flex>
        </v-layout>

        <div class="c-separator" />

        <div class="content-notes">
          <p>
            notes
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
