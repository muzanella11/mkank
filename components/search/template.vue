<template>
  <div class="c-search">
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

          <v-flex
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
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
