<template>
  <div class="l-calculator">
    <v-app-bar
      fixed
      class="calculator__toolbar"
    >
      <v-btn
        icon
        @click="backStep"
      >
        <v-icon light>
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-toolbar-title
        class="toolbar__title"
        v-html="`Installment Calculator`"
      />
    </v-app-bar>

    <section class="calculator__content">
      <div class="content-wrapper">
        <enem-card-calculator-count />

        <div class="content-notes">
          <v-icon>
            mdi-information
          </v-icon>
          This calculation is an estimation only
        </div>

        <div class="content-form">
          <ul class="property-list">
            <template
              v-if="entry.length > 0"
            >
              <li
                v-for="(itemEntry, indexEntry) in entry"
                :key="indexEntry"
              >
                <enem-cards
                  class="property-list__card"
                >
                  <enem-button-option
                    title="Property Type"
                    :entries="question.propertyType"
                    :value="itemEntry.propertyType"
                    @input="setPropertyType(indexEntry, $event)"
                  />

                  <v-layout
                    class="content-form__wrapper"
                    wrap
                  >
                    <v-flex
                      v-if="itemEntry.propertyType !== 'sale'"
                      class="content-form__item"
                      xs12
                      sm12
                    >
                      <v-text-field
                        outlined
                        label="Price Per Month"
                      />
                    </v-flex>

                    <v-flex
                      v-if="itemEntry.propertyType !== 'rent'"
                      class="content-form__item"
                      xs12
                      sm12
                    >
                      <v-text-field
                        outlined
                        label="Total Price"
                      />
                    </v-flex>

                    <v-flex
                      v-if="itemEntry.propertyType !== 'rent'"
                      class="content-form__item"
                      xs12
                      sm12
                    >
                      <v-switch
                        v-model="itemEntry.divideProfitPerMonth"
                        color="primary"
                        label="Divide profit per month"
                      />
                    </v-flex>

                    <v-flex
                      class="content-form__item"
                      xs12
                      sm12
                    >
                      <v-text-field
                        v-model="itemEntry.duration"
                        :disabled="!itemEntry.divideProfitPerMonth && itemEntry.propertyType !== 'rent'"
                        outlined
                        label="Duration (Month)"
                      />
                    </v-flex>
                  </v-layout>

                  <v-layout
                    wrap
                    class="card-action"
                  >
                    <v-flex
                      sm12
                      xs12
                      class="wrapper-button"
                    >
                      <v-btn
                        outlined
                        class="button"
                        @click="removeProperty(indexEntry)"
                      >
                        Remove Property
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </enem-cards>
              </li>
            </template>

            <li v-else>
              Sorry we not found your property :(
            </li>

            <li class="action__add-property wrapper-button">
              <v-btn
                outlined
                class="button"
                @click="addProperty"
              >
                Add Property
              </v-btn>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
