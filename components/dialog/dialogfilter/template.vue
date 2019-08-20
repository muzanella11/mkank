<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
    content-class="c-dialog dialog-filter-sort"
  >
    <v-card tile>
      <v-toolbar>
        <v-btn
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer />
        <v-toolbar-title>
          Filter
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            dark
            text
            @click="dialog = false"
          >
            Reset
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <div class="dialog-content">
        <v-layout
          wrap
          class="dialog-section"
        >
          <v-flex
            xs12
            sm6
            class="dialog-section__header"
          >
            Header
          </v-flex>

          <v-flex
            xs12
            sm6
            class="dialog-section__content"
          >
            Content
          </v-flex>
        </v-layout>
      </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
