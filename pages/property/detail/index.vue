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

    <enem-card-property-detail
      :entries="propertyDetail"
    />

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
          <li
            v-for="(itemFacility, indexFacility) in propertyFacilites"
            :key="indexFacility"
            class="list-item"
          >
            <v-chip
              color="secondary"
              label
              text-color="white"
            >
              {{ itemFacility.name }}
            </v-chip>
          </li>
          <!-- <li class="list-item">
            <v-btn
              small
              outlined
              color="primary"
            >
              See All
            </v-btn>
          </li> -->
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
            {{ propertyInformation.location }}
          </div>
        </div>

        <div class="content__property-information">
          <ul class="property-information__list">
            <li
              v-for="(itemInformation, indexInformation) in propertyInformation.details"
              :key="indexInformation"
              class="list-item"
            >
              <div class="list-item__title">
                {{ itemInformation.name }}
              </div>
              <div class="list-item__separator">
                :
              </div>
              <div class="list-item__value">
                {{ itemInformation.status }}
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
          <div
            id="similarMap"
            class="similar-map"
          >
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

    <section class="property-detail__section section--contact">
      <div class="section-content">
        <div class="content__left">
          <div class="content__agent-logo">
            <img
              :src="propertyOwner.icon"
              alt="agent-logo"
            >
          </div>
          <div class="content__agent-detail">
            <div class="agent-avatar">
              <img
                :src="propertyOwner.image"
                alt="agent-logo"
              >
            </div>

            <div class="agent-detail">
              <div class="agent-detail__name">
                {{ propertyOwner.name }}
              </div>
              <div class="agent-detail__date-join">
                {{ dateJoin(propertyOwner.date_join) }}
              </div>
            </div>
          </div>
        </div>
        <div class="content__right">
          <div class="content__contact">
            <v-btn
              fab
              x-small
              color="primary"
            >
              <v-icon>
                mdi-message-processing
              </v-icon>
            </v-btn>

            <v-btn
              fab
              x-small
              color="primary"
            >
              <v-icon>
                mdi-phone
              </v-icon>
            </v-btn>
          </div>
        </div>
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
