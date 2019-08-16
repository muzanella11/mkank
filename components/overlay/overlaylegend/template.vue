<template>
  <overlay-fixed
    class="overlay--legend"
    :value="showLegend"
    @input="setShowLegend"
  >
    <div class="legend">
      <div class="legend__header">
        <h3 class="title">
          Header
        </h3>
        <span
          class="action-button__close"
          @click="setShowLegend(false)"
        >
          <v-icon>mdi-close</v-icon>
        </span>
      </div>

      <div class="legend__content">
        <ul class="content-list__legend">
          <li
            v-for="(item, index) in listLegend"
            :key="index"
            :class="`item--${item.color}`"
          >
            <label class="title">
              {{ item.label }}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </overlay-fixed>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
