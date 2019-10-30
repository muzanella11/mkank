import EnemCards from './../carddefault/template.vue'

export default {
  props: {
    agentDetail: {
      type: Boolean,
      default: false
    },
    entries: {
      type: Object,
      default: () => {
        return {}
      }
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
    },

    backgroundStyle () {
      return `url(${this.entries.image[0]}) no-repeat center center / cover`
    },

    propertyImage () {
      return this.entries.image !== undefined ? this.entries.image : ''
    }
  },

  methods: {
    btnAction (title) {
      if (this.wizardActive === 1) {
        window.localStorage.setItem('lang', title.toLowerCase())
        this.$router.push({ path: '/startup', query: { wizard: 2 } })
      } else if (this.wizardActive === 2) {
        this.$router.push({ path: '/auth/signin', query: { role: title.toLowerCase() } })
      }
    }
  }
}
