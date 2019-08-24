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
          <ul class="content-list-property-agent">
            <li>
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
                      src="https://randomuser.me/api/portraits/men/33.jpg"
                      alt="name"
                    >
                    <label class="account-name">
                      user ssss
                    </label>
                  </v-flex>

                  <v-flex
                    class="content__right"
                    xs6
                    sm6
                  >
                    <img
                      class="logo"
                      src="https://cdn.zeplin.io/5d4dadc08d5c26520b4806e2/assets/AB4CC257-F7E3-4E71-8B1A-6025FD4AA4B5.png"
                      alt="name"
                    >
                  </v-flex>
                </v-layout>
              </div>

              <ul class="list-property-agent__property-list">
                <li
                  v-for="(item, index) in 10"
                  :key="index"
                >
                  <enem-card-property />
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
