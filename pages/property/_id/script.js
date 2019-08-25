import EnemCardPropertyDetail from '~/components/cards/cardpropertydetail/template.vue'
import EnemCardCalculator from '~/components/cards/cardcalculator/template.vue'

export default {
  layout: 'blank/template',

  components: {
    EnemCardPropertyDetail,
    EnemCardCalculator
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

  methods: {
    backStep () {
      if (this.stepActive > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push({ path: '/startup' })
      }
    },

    calculatorCountPage () {
      this.$router.push({ path: '/calculator' })
    }
  }
}
