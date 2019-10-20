<template>
  <enem-cards class="c-card-authentication verification">
    <div class="authentication__content">
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

      <div class="content-header text-header">
        Verification Account
      </div>

      <div class="content-subheader text-subheader">
        Please input the code sent to you via sms to complete the registration process
      </div>

      <div class="content-form">
        <v-layout wrap>
          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.code"
              outlined
              label="Code"
            />
          </v-flex>
        </v-layout>
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
              @click="btnAction"
            >
              Confirm
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
