<template>
  <enem-cards class="c-card-onboarding">
    <div class="onboarding-header text-header">
      {{ entries.header }}
    </div>
    <div class="onboarding-subheader text-subheader">
      {{ entries.subheader }}
    </div>

    <div class="c-separator separator-lang" />

    <div
      v-if="entries.wizard.length > 0"
      class="onboarding-step"
    >
      <ul class="step-list">
        <li
          v-for="(itemWizard, indexWizard) in entries.wizard"
          :key="indexWizard"
          :class="[indexWizard + 1 === wizardActive ? 'active' : '']"
          :style="{left: `-${parseInt((wizardActive - 1) * 50)}%`}"
        >
          <div class="diamond">
            <span class="text">
              {{ indexWizard + 1 }}
            </span>
          </div>
          <div class="step-list__wording text-small text-grey">
            {{ itemWizard }}
          </div>
        </li>
      </ul>
    </div>

    <div class="onboarding-action">
      <v-btn
        v-if="buttonPrimary"
        depressed
        color="primary"
        class="action__button"
        @click="btnAction(buttonPrimary.title)"
      >
        {{ buttonPrimary.title }}
      </v-btn>

      <div class="action__separator text-small text-grey">
        {{ entries.separator }}
      </div>

      <v-btn
        v-if="buttonSecondary"
        depressed
        color="secondary"
        class="action__button"
        @click="btnAction(buttonSecondary.title)"
      >
        {{ buttonSecondary.title }}
      </v-btn>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
