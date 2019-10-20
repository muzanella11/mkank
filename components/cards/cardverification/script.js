import EnemCards from './../carddefault/template.vue'
import QueryString from 'querystring'

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
    EnemCards
  },

  data () {
    return {
      entry: {
        code: ''
      }
    }
  },

  computed: {
    wizardActive () {
      return this.$route.query.wizard === undefined ? 1 : parseInt(this.$route.query.wizard)
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
    btnAction () {
      const queryStringRaw = QueryString.parse(window.location.search.split('?')[1])

      delete queryStringRaw.wizard

      const stringifyUrl = QueryString.stringify(queryStringRaw)

      window.location = `/auth/signin?${stringifyUrl}`
    }
  }
}
