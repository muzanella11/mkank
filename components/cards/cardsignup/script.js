import EnemCards from './../carddefault/template.vue'
import EnemDatePicker from './../../inputs/Datepicker/template.vue'
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
          'Profile',
          'Verification'
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
    EnemCards,
    EnemDatePicker
  },

  data () {
    return {
      listSellerType: [
        'Corporate',
        'Individual'
      ],
      entry: {
        sellerType: '',
        name: '',
        email: '',
        password: '',
        birthDate: '',
        phoneNumber: '',
        qatarId: '',
        address: ''
      }
    }
  },

  computed: {
    wizardActive () {
      return this.$route.query.wizard === undefined ? 1 : parseInt(this.$route.query.wizard)
    },

    roleActive () {
      return this.$route.query.role === undefined ? 'buyer' : this.$route.query.role
    },

    buttonPrimary () {
      return this.entries.buttonAction.find(item => item.type === 'btn-primary') || {}
    },

    buttonSecondary () {
      return this.entries.buttonAction.find(item => item.type === 'btn-secondary') || {}
    },

    transformValue () {
      return `translateX(-${this.wizardActive > 1 ? (parseInt(this.wizardActive) - 1) * (100 / this.entries.wizard.length) : 0}%)`
    }
  },

  methods: {
    ...mapActions({
      fetchSignup: AUTHTPYES.FETCH_SIGNUP
    }),

    ...mapMutations({
      setStateGlobal: TYPES.SET_STATE
    }),

    btnAction () {
      if (this.wizardActive === 1) {
        this.submit()
      } else {
        this.goToPage()
      }
    },

    goToPage () {
      let queryStringRaw = QueryString.parse(window.location.search.split('?')[1])

      if (this.wizardActive === 1) {
        queryStringRaw = Object.assign({}, queryStringRaw, {
          wizard: this.wizardActive + 1
        })
      } else if (this.wizardActive === 2) {
        queryStringRaw = Object.assign({}, queryStringRaw, {
          wizard: this.wizardActive - 1
        })
      }

      const stringifyUrl = QueryString.stringify(queryStringRaw)

      window.location = `${window.location.pathname}?${stringifyUrl}`
    },

    setSellerType (value) {
      this.entry.sellerType = value
    },

    setBirthDate (value) {
      this.entry.birthDate = value
    },

    mapData () {
      return {
        seller_type: this.entry.sellerType,
        name: this.entry.name,
        email: this.entry.email,
        password: this.entry.password,
        bod: this.entry.birthDate,
        phone: this.entry.phoneNumber,
        qatarid: this.entry.qatarId,
        address: this.entry.address,
        typeseller: this.entry.sellerType
      }
    },

    async submit () {
      const data = this.mapData()

      try {
        await this.fetchSignup(data)

        this.setStateGlobal({
          accessor: 'snackbarOptions',
          value: {
            text: 'Success register',
            color: 'success',
            buttonColor: 'white',
            isShown: true
          }
        })

        setTimeout(() => {
          this.goToPage()
        })
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
    }
  }
}
