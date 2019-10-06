<template>
  <enem-cards class="c-card-authentication signup">
    <div class="authentication__content">
      <div
        class="c-wizard-diamond"
      >
        <ul
          class="wizard-diamond__list"
          :style="{transform: transformValue}"
        >
          <li
            v-for="(itemWizard, indexWizard) in entries.wizard"
            :key="indexWizard"
            :class="[indexWizard + 1 === wizardActive ? 'active' : '']"
          >
            <div class="c-diamond">
              <span class="text">
                {{ indexWizard + 1 }}
              </span>
            </div>
            <div class="list__wording text-small text-grey">
              {{ itemWizard }}
            </div>
          </li>
        </ul>
      </div>

      <div class="c-separator" />

      <div class="content-form">
        <v-layout
          v-if="roleActive === 'seller'"
          class="content-form__seller-type"
          wrap
        >
          <label class="seller-type__label">
            Seller Type
          </label>

          <v-layout
            class="seller-type__wrapper-button"
            wrap
          >
            <v-flex
              v-for="(itemSellerType, indexSellerType) in listSellerType"
              :key="indexSellerType"
              class="wrapper-button__item"
              xs6
              sm6
            >
              <v-btn
                depressed
                class="seller-type__button"
                :class="[entry.sellerType === itemSellerType.toLowerCase() ? 'active' : '']"
                width="100%"
                @click="setSellerType(itemSellerType.toLowerCase())"
              >
                {{ itemSellerType }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>

        <v-layout wrap>
          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.name"
              outlined
              label="Name"
            />
          </v-flex>
        </v-layout>

        <v-layout wrap>
          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.email"
              outlined
              label="Email"
            />
          </v-flex>
        </v-layout>

        <div class="c-separator" />

        <v-layout wrap>
          <v-flex
            xs12
            sm6
          >
            <enem-date-picker
              placeholder="Birth Date"
              :value="entry.birthDate"
              @input="setBirthDate"
            />
          </v-flex>

          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.phoneNumber"
              outlined
              label="Phone Number"
            />
          </v-flex>

          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.qatarId"
              outlined
              label="Qatar ID"
            />
          </v-flex>

          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.address"
              outlined
              label="Address"
            />
          </v-flex>
        </v-layout>

        <div class="c-separator" />

        <div class="content-notes">
          <p>
            All information above are necessary and must be filled before proceeding
          </p>
        </div>
      </div>

      <div class="content-action">
        <v-layout wrap>
          <v-flex
            xs12
            sm6
          >
            <v-btn
              depressed
              color="primary"
              class="action__button"
              width="100%"
              @click="btnAction"
            >
              Next Step
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
