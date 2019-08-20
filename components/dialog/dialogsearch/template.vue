<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
    content-class="c-dialog dialog-search"
  >
    <v-card tile>
      <v-toolbar>
        <v-btn
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-layout
          wrap
        >
          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="keywords"
              class="dialog-search__keywords"
              single-line
              label="Search by location or building..."
            />
          </v-flex>
        </v-layout>
      </v-toolbar>

      <div class="dialog-content">
        <v-layout
          wrap
          class="dialog-search__wrapper-locbuilding"
        >
          <v-flex
            xs6
            sm6
            class="dialog-search__locbuilding"
          >
            Location
          </v-flex>

          <v-flex
            xs6
            sm6
            class="dialog-search__locbuilding"
          >
            Building
          </v-flex>
        </v-layout>

        <v-layout
          wrap
          class="dialog-search__wrapper-locbuilding location-mode"
        >
          <v-flex
            xs6
            sm6
            class="dialog-search__locbuilding"
          >
            Use Current Location
          </v-flex>

          <v-flex
            xs6
            sm6
            class="dialog-search__locbuilding"
          >
            Open In Maps
          </v-flex>
        </v-layout>

        <v-layout
          wrap
          class="dialog-search__wrapper-locbuilding recently-search"
        >
          <v-flex
            xs12
            sm6
            class="dialog-search__locbuilding"
          >
            <v-layout
              wrap
            >
              <v-flex
                xs6
                sm6
                class="dialog-search__wrapper-locbuilding recently-title"
              >
                Recently Searched
              </v-flex>
            </v-layout>

            <v-layout
              wrap
              class="dialog-search__wrapper-locbuilding recently-content"
            >
              <ul class="recent-list">
                <li>
                  <v-icon>mdi-clock-outline</v-icon>
                  <span>
                    label
                  </span>
                </li>
                <li>
                  <v-icon>mdi-clock-outline</v-icon>
                  <span>
                    label
                  </span>
                </li>
                <li>
                  <v-icon>mdi-clock-outline</v-icon>
                  <span>
                    label
                  </span>
                </li>
              </ul>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout
          wrap
          class="dialog-search__wrapper-locbuilding recently-seen"
        >
          <v-flex
            xs12
            sm6
            class="dialog-search__locbuilding"
          >
            <v-layout
              wrap
            >
              <v-flex
                xs6
                sm6
                class="dialog-search__wrapper-locbuilding recently-title"
              >
                Recently Seen
              </v-flex>

              <v-flex
                xs6
                sm6
                class="dialog-search__wrapper-locbuilding recently-action"
              >
                <v-btn
                  flat
                  small
                  text
                >
                  See All
                </v-btn>
              </v-flex>
            </v-layout>

            <v-layout
              wrap
              class="dialog-search__wrapper-locbuilding recently-content slider"
            >
              <enem-carousel-property />
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
