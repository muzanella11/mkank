import EnemCards from './../carddefault/template.vue'
import QueryString from 'querystring'
import { mapActions, mapMutations } from 'vuex'
import * as AUTHTPYES from '~/store/modules/auth/types'
import * as TYPES from '~/store/types'

export default {
  props: {
    entries: {
      type: Object,
      default: () => ({
        header: 'Before we start,',
        subheader: `What's your language preferences ?`,
        separator: 'Or',
        wizard: [
          'Language',
          'Buyer/Seller'
        ],
        buttonAction: [
          {
            type: 'btn-primary',
            url: 'javascript:;',
            title: 'English'
          },
          {
            type: 'btn-secondary',
            url: 'javascript:;',
            title: 'Arabic'
          }
        ]
      })
    }
  },

  components: {
    EnemCards
  },

  data () {
    return {
      entry: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    wizardActive () {
      return this.$route.query.wizard === undefined ? 1 : parseInt(this.$route.query.wizard)
    },

    roleActive () {
      return this.$route.query.role || 'Seller'
    },

    buttonPrimary () {
      return this.entries.buttonAction.find(item => item.type === 'btn-primary') || {}
    },

    buttonSecondary () {
      return this.entries.buttonAction.find(item => item.type === 'btn-secondary') || {}
    }
  },

  methods: {
    ...mapActions({
      fetchSignin: AUTHTPYES.FETCH_SIGNIN
    }),

    ...mapMutations({
      setStateGlobal: TYPES.SET_STATE
    }),

    btnAction (action) {
      if (action === 'signin') {
        this.submit()
      } else {
        this.signup()
      }
    },

    signup () {
      const query = this.$route.query

      this.$router.push({ path: '/auth/signup', query: query })
    },

    async submit () {
      try {
        await this.fetchSignin(this.entry)

        this.setStateGlobal({
          accessor: 'snackbarOptions',
          value: {
            text: 'Success signin',
            color: 'success',
            buttonColor: 'white',
            isShown: true
          }
        })

        this.goToDashboard()
      } catch (error) {
        this.setStateGlobal({
          accessor: 'snackbarOptions',
          value: {
            text: error.message,
            color: 'error',
            buttonColor: 'white',
            isShown: true
          }
        })
      }
    },

    goToDashboard () {
      let queryStringRaw = QueryString.parse(window.location.search.split('?')[1])

      queryStringRaw = Object.assign({}, queryStringRaw, {
        role: this.roleActive.toLowerCase()
      })

      const stringifyUrl = QueryString.stringify(queryStringRaw)

      window.location = `/?${stringifyUrl}`
    }
  }
}
