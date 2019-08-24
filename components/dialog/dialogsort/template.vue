<template>
  <v-dialog
    v-model="dialog"
    fullscreen
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
          Sort
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>

      <div class="dialog-content">
        <div class="dialog-content__container">
          <v-layout
            wrap
            class="dialog-section"
          >
            <v-flex
              xs12
              sm6
              class="dialog-section__content"
            >
              <ul class="content-list-option">
                <li
                  v-for="(item, index) in listSort"
                  :key="index"
                >
                  <a href="javascript:;">
                    <label>
                      {{ item.label }}
                    </label>
                    <v-icon>mdi-check</v-icon>
                  </a>
                </li>
              </ul>
            </v-flex>
          </v-layout>

          <v-layout
            wrap
            class="dialog-footer"
          >
            <v-flex
              xs6
              sm6
              class="dialog-footer__action"
            >
              <v-btn
                small
                depressed
                outlined
                width="100%"
              >
                clear
              </v-btn>
            </v-flex>

            <v-flex
              xs6
              sm6
              class="dialog-footer__action"
            >
              <v-btn
                small
                depressed
                width="100%"
                color="primary"
              >
                Find
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
