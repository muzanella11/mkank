<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    transition="dialog-bottom-transition"
    scrollable
    content-class="c-dialog dialog-property-information"
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
          Property Information
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
              <div class="content__location">
                <div class="location-icon">
                  <v-icon>
                    mdi-map-marker
                  </v-icon>
                </div>
                <div class="location-content">
                  West Bay, Doha, Al Tuwaim Street، الدوحة
                </div>
              </div>

              <div class="content__property-information">
                <ul class="property-information__list">
                  <li class="list-item">
                    <div class="list-item__title">
                      Title
                    </div>
                    <div class="list-item__separator">
                      :
                    </div>
                    <div class="list-item__value">
                      Value
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="list-item__title">
                      Title
                    </div>
                    <div class="list-item__separator">
                      :
                    </div>
                    <div class="list-item__value">
                      Value
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="list-item__title">
                      Title
                    </div>
                    <div class="list-item__separator">
                      :
                    </div>
                    <div class="list-item__value">
                      Value
                    </div>
                  </li>
                </ul>
              </div>
            </v-flex>
          </v-layout>
        </div>

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
              <div class="content__header">
                Description
              </div>

              <div class="content__main">
                Paradise at The Point! This luxurious 4 bedroom 4.5 bath Dienst-built estate on the Lake Norman peninsula is a dream home in a high-end community that's home to Trump National Golf Club. Spanning over 4900 SF, this magnificent waterfront residence graced by soaring ceilings and wall-to-wall windows is a haven for gazing at Lake Norman views from multiple vantage points.

                The grand entryway with a sweeping staircase draws you into a voluminous layout made for entertaining. The 2-story great room with French doors to the rear deck is the dramatic focal point of the main level, accompanied by an elegant formal dining room, tremendous chef's kitchen, den/family room with a marble fireplace and glass doors to the backyard, and home office with gorgeous built-ins.

                The divine master suite presents tray ceilings, massive windows, a terrace overlooking the water, and an opulent ensuite bath will a soaking tub and separate glass shower. The lower level houses a large rec room with wood floors and a wet bar, billiards room, and 2nd living quarters with a full kitchen. Laundry is conveniently located on the main and lower levels. Park your boat at the common boat slip (one of only 3) accessed via boardwalk behind the house.
              </div>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
