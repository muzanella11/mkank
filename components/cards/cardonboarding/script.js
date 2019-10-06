import EnemCards from './../carddefault/template.vue'

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
    return {}
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
    }
  },

  methods: {
    btnAction (title) {
      const value = title.toLowerCase()

      if (this.wizardActive === 1) {
        window.localStorage.setItem('lang', value)
        window.location = '/startup?wizard=2'
      } else if (this.wizardActive === 2) {
        window.localStorage.setItem('role', value)

        setTimeout(() => {
          if (value === 'buyer') {
            window.location = '/'
          } else {
            window.location = `/startup?role=${title.toLowerCase()}`
          }
        }, 1000)
      }
    }
  }
}
