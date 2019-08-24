import BrandLogo from '~/components/BrandLogo.vue'
import EnemCardCalculatorCount from '~/components/cards/cardcalculatorcount/template.vue'

export default {
  layout: 'blank/template',

  components: {
    BrandLogo,
    EnemCardCalculatorCount
  },

  data () {
    return {
      //
    }
  },

  methods: {
    backStep () {
      this.$router.push({ path: '/dashboard' })
    }
  }
}
