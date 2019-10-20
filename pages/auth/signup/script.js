import EnemCardSignup from '~/components/cards/cardsignup/template.vue'
import EnemCardVerification from '~/components/cards/cardverification/template.vue'

export default {
  layout: 'blank/template',

  components: {
    EnemCardSignup,
    EnemCardVerification
  },

  computed: {
    toolbarTitle () {
      return 'Register'
    },

    roleActive () {
      const role = this.$route.query.role
      return role === undefined ? 'buyer' : role.toLowerCase()
    },

    wizardActive () {
      return this.$route.query.wizard === undefined ? 1 : parseInt(this.$route.query.wizard)
    }
  },

  methods: {
    backStep () {
      if (this.wizardActive > 1) {
        this.$router.go(-1)
      } else {
        window.location = '/startup'
      }
    }
  }
}
