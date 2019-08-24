import EnemCardListing from '~/components/cards/cardlisting/template.vue'

export default {
  layout: 'blank/template',

  components: {
    EnemCardListing
  },
  computed: {
    toolbarTitle () {
      return 'Register'
    },
    roleActive () {
      const role = this.$route.query.role
      return role === undefined ? 'buyer' : role.toLowerCase()
    },

    stepActive () {
      return this.$route.query.step === undefined ? 1 : parseInt(this.$route.query.step)
    }
  },
  mounted () {
    //
  },

  methods: {
    backStep () {
      if (this.stepActive > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push({ path: '/startup' })
      }
    }
  }
}
