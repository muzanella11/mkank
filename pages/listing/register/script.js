import FormBasicInfo from '~/components/cards/cardlisting/basicinfo/template.vue'
import FormLocation from '~/components/cards/cardlisting/location/template.vue'
import FormDetails from '~/components/cards/cardlisting/details/template.vue'
import FormPhoto from '~/components/cards/cardlisting/photo/template.vue'

export default {
  layout: 'blank/template',

  components: {
    FormBasicInfo,
    FormLocation,
    FormDetails,
    FormPhoto
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
      return this.$route.query.wizard === undefined || !this.$route.query.wizard ? 1 : parseInt(this.$route.query.wizard)
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
