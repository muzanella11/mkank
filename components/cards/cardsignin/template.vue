<template>
  <enem-cards class="c-card-authentication signin">
    <div class="authentication__content">
      <div class="content-header text-header">
        Welcome {{ roleActive }}
      </div>

      <div class="content-subheader text-subheader">
        Let's fill your info and get started
      </div>

      <div class="c-separator" />

      <div class="content-form">
        <v-layout wrap>
          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.email"
              outlined
              label="Email"
              prepend-inner-icon="mdi-email-outline"
            />
          </v-flex>

          <v-flex
            xs12
            sm6
          >
            <v-text-field
              v-model="entry.password"
              outlined
              label="Password"
              type="password"
              prepend-inner-icon="mdi-lock"
            />
          </v-flex>
        </v-layout>
      </div>

      <div class="content-action">
        <v-layout wrap>
          <v-flex
            xs6
            sm6
            class="action__wording"
          >
            Forgot Password ?
          </v-flex>

          <v-flex
            xs6
            sm6
          >
            <v-btn
              depressed
              color="primary"
              class="action__button"
              width="100%"
              @click="btnAction('signin')"
            >
              Login
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <div class="c-separator" />

    <div class="authentication__footer">
      <span class="footer-question">Don't have an account?</span>&nbsp;
      <a
        href="javascript:;"
        @click="btnAction('signup')"
      >Register</a>
    </div>
  </enem-cards>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
