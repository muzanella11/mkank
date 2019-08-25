import EnemCardPropertyDetail from '~/components/cards/cardpropertydetail/template.vue'
import EnemCardCalculator from '~/components/cards/cardcalculator/template.vue'
import EnemDialogPropertyInformation from '~/components/dialog/dialogpropertyinformation/template.vue'

export default {
  layout: 'blank/template',

  components: {
    EnemCardPropertyDetail,
    EnemCardCalculator,
    EnemDialogPropertyInformation
  },

  data () {
    return {
      dialogPropertyInformation: false
    }
  },

  methods: {
    backStep () {
      this.$router.push({ path: '/dashboard' })
    },

    calculatorCountPage () {
      this.$router.push({ path: '/calculator' })
    },

    setDialogPropertyInformation (val) {
      this.dialogPropertyInformation = val
    }
  }
}
