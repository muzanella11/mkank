<template>
  <v-layout
    class="c-button-option"
    wrap
  >
    <v-flex
      class="button-option__title"
      xs12
      sm12
    >
      {{ title }}
    </v-flex>

    <v-layout
      class="button-option__wrapper-button"
      wrap
      outlinecolor="warning"
    >
      <v-flex
        v-for="(itemButton, indexItemButton) in entries"
        :key="indexItemButton"
        xs6
        sm6
      >
        <v-btn
          width="100%"
          text
          class="button"
          :class="[isActived(itemButton) ? 'active' : '']"
          @click="setSelected(itemButton)"
        >
          {{ itemButton.label }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
