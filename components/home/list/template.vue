<template>
  <div
    class="c-home-list"
    :class="[noFilter ? 'no-filter' : '']"
  >
    <!-- Begin Top Picks -->
    <section class="home-list__section section-top-picks">
      <div class="section__content">
        <div class="content-wrapper">
          <div class="content-header">
            Top picks
          </div>

          <!-- Begin List Property Agent -->
          <ul
            v-if="entries.length > 0"
            class="content-list-property-agent"
          >
            <li
              v-for="(itemPropertyAgent, indexPropertyAgent) in entries"
              :key="indexPropertyAgent"
            >
              <div class="list-property-agent__title">
                <v-layout
                  class="title-content"
                  wrap
                >
                  <v-flex
                    class="content__left"
                    xs6
                    sm6
                  >
                    <img
                      class="avatar"
                      :src="itemPropertyAgent.image"
                      :alt="itemPropertyAgent.name"
                    >
                    <label class="account-name">
                      {{ itemPropertyAgent.name }}
                    </label>
                  </v-flex>

                  <v-flex
                    class="content__right"
                    xs6
                    sm6
                  >
                    <img
                      class="logo"
                      :src="itemPropertyAgent.icon"
                      :alt="itemPropertyAgent.name"
                    >
                  </v-flex>
                </v-layout>
              </div>

              <ul class="list-property-agent__property-list">
                <li
                  v-for="(itemPropertyList, indexPropertyList) in itemPropertyAgent.list"
                  :key="indexPropertyList"
                >
                  <a
                    :href="getPropertyUrl(itemPropertyList)"
                  >
                    <enem-card-property :entries="itemPropertyList" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <!-- End List Property Agent -->
        </div>
      </div>
    </section>
    <!-- End Top Picks -->
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
