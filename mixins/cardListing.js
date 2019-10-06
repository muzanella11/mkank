import EnemCards from '~/components/cards/carddefault/template.vue'
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
          'Basic Info',
          'Location',
          'Detail',
          'Photo'
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
    return {}
  },

  computed: {
    wizardActive () {
      return this.$route.query.wizard === undefined || !this.$route.query.wizard ? 1 : parseInt(this.$route.query.wizard)
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
    btnAction (action) {
      let queryStringRaw = QueryString.parse(window.location.search.split('?')[1])

      if (action === 'next') {
        queryStringRaw = Object.assign({}, queryStringRaw, {
          wizard: this.wizardActive + 1
        })
      } else if (action === 'prev') {
        queryStringRaw = Object.assign({}, queryStringRaw, {
          wizard: this.wizardActive - 1
        })
      } else if (action === 'preview') {
        window.location = `/listing/preview`
      } else {
        return
      }

      const stringifyUrl = QueryString.stringify(queryStringRaw)

      window.location = `${window.location.pathname}?${stringifyUrl}`
    }
  }
}
