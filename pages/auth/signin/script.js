import EnemCardSignin from '~/components/cards/cardsignin/template.vue'

export default {
  layout: 'blank/template',

  components: {
    EnemCardSignin
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
