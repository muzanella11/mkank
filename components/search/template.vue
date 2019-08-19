<template>
  <div
    class="c-search"
    :class="[isDashboard ? 'dashboard' : '']"
  >
    <div class="search__wrapper-content">
      <div class="content-action">
        <v-layout
          class="action__filter"
          wrap
        >
          <v-flex
            v-for="(item, index) in searchFilter"
            :key="index"
            xs6
            sm6
          >
            <v-btn
              depressed
              class="action__button"
              :class="[item.value === filters.status ? 'active' : '']"
              width="100%"
              @click="setFilterStatus(item)"
            >
              {{ item.label }}
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout
          class="action__keywords"
          wrap
        >
          <template v-if="isDashboard">
            <v-flex
              xs12
              sm12
            >
              <v-text-field
                v-model="filters.keywords"
                single-line
                outlined
                label="Search by location or building..."
                prepend-inner-icon="mdi-magnify"
                @click="dialog = true"
              />
            </v-flex>
          </template>

          <template v-else>
            <v-flex
              xs10
              sm11
            >
              <v-text-field
                v-model="filters.keywords"
                single-line
                outlined
                label="Search by location or building..."
                prepend-inner-icon="mdi-magnify"
              />
            </v-flex>
          </template>

          <v-flex
            v-if="!isDashboard"
            xs2
            sm1
          >
            <v-btn
              class="keywords__filter-action"
              outlined
              fab
              small
              color="#949393"
              @click="searchTypeAction"
            >
              <v-icon>{{ searchTypeIcon }}</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <!-- Begin Dialog -->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
      content-class="dialog-search"
    >
      <v-card tile>
        <v-toolbar
          flat
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
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
                v-model="filters.keywords"
                class="dialog-search__keywords"
                single-line
                label="Search by location or building..."
              />
            </v-flex>
          </v-layout>
        </v-toolbar>
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
      </v-card>
    </v-dialog>
    <!-- End Dialog -->
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
