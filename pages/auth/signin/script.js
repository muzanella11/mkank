import EnemCardOnBoarding from '~/components/cards/cardonboarding/template.vue'

export default {
  layout: 'blank/template',

  components: {
    EnemCardOnBoarding
  },

  computed: {
    toolbarTitle () {
      return 'Login'
    },

    roleActive () {
      const role = this.$route.query.role
      return role === undefined ? 'buyer' : role.toLowerCase()
    }
  },

  methods: {
    backStep () {
      this.$router.push({ path: 'startup' })
    }
  }
}
