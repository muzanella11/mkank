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
      setTimeout(() => {
        window.location = '/startup'
      }, 2000)
    }
  }
}
</script>
