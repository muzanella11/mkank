<template>
  <div />
</template>

<script>
import * as Storage from '~/utils/storage'

export default {
  layout: 'blank/template',

  data () {
    return {
      //
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      Storage.clearStorage()
      window.location = '/startup'
    }
  }
}
</script>
