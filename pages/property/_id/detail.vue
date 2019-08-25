<template>
  <div class="l-property-detail">
    <v-app-bar
      absolute
      color="transparent"
      flat
      class="property-detail__toolbar"
    >
      <v-btn
        fab
        x-small
        color="#707070"
        class="toolbar__button"
        @click="backStep"
      >
        <v-icon light>
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-spacer />

      <v-btn
        fab
        x-small
        color="#707070"
        class="toolbar__button"
      >
        <v-icon light>
          mdi-share-variant
        </v-icon>
      </v-btn>
    </v-app-bar>

    <enem-card-property-detail />

    <section class="property-detail__section section--calculator">
      <div class="section-content">
        <a
          href="javascript:;"
          class="action-calculator"
          @click="calculatorCountPage"
        >
          <enem-card-calculator />
        </a>
      </div>
    </section>

    <section class="property-detail__section">
      <div class="section-header">
        Facilities
      </div>
      <div class="section-content">
        <ul class="content__list">
          <li class="list-item">
            <v-chip
              color="secondary"
              label
              text-color="white"
            >
              Pool
            </v-chip>
          </li>
          <li class="list-item">
            <v-chip
              color="secondary"
              label
              text-color="white"
            >
              Internet
            </v-chip>
          </li>
          <li class="list-item">
            <v-chip
              color="secondary"
              label
              text-color="white"
            >
              Air Conditioner
            </v-chip>
          </li>
          <li class="list-item">
            <v-btn
              small
              outlined
              color="primary"
            >
              See All
            </v-btn>
          </li>
        </ul>
      </div>
    </section>

    <section class="property-detail__section">
      <div class="section-header">
        Property Information
      </div>
      <div class="section-content">
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
          </ul>
        </div>
      </div>
      <div class="section-footer">
        <v-btn
          small
          text
          color="primary"
          class="action-button"
          @click="dialogPropertyInformation = true"
        >
          See All
        </v-btn>
      </div>
    </section>

    <section class="property-detail__section">
      <div class="section-header">
        Similar
      </div>
      <div class="section-content">
        <div class="content__similar">
          <div class="similar-map">
            map
          </div>

          <ul class="similar-list">
            <li class="list-item">
              <div class="list-item__title">
                1. Title
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
      </div>
      <div class="section-footer">
        <v-btn
          small
          text
          color="primary"
          class="action-button"
        >
          See All
        </v-btn>
      </div>
    </section>

    <!-- Begin Dialog Property Information -->
    <enem-dialog-property-information
      :value="dialogPropertyInformation"
      @input="setDialogPropertyInformation"
    />
    <!-- End Dialog Property Information -->
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
