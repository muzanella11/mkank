<template>
  <v-layout wrap>
    <v-flex
      xs12
      sm12
    >
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            outlined
            :label="placeholder"
            readonly
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
