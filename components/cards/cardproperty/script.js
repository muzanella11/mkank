import EnemCards from './../carddefault/template.vue'

export default {
  props: {
    role: {
      type: String,
      default: ''
    },
    agentDetail: {
      type: Boolean,
      default: false
    },
    entries: {
      type: Object,
      default: () => ({})
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

    propertyImage () {
      return this.entries.image && this.entries.image.length > 0 ? this.entries.image[0] : ''
    },

    propertyLabel () {
      return this.entries.label ? this.entries.label : ''
    },

    propertyPrice () {
      return this.entries.price ? this.entries.price : ''
    },

    propertyAddress () {
      return this.entries.address ? this.entries.address : ''
    },

    propertyBathroom () {
      return this.entries.bathroom ? this.entries.bathroom : ''
    },

    propertyBedroom () {
      return this.entries.bedroom ? this.entries.bedroom : ''
    },

    propertyCarpark () {
      return this.entries.carpark ? this.entries.carpark : ''
    },

    propertyViews () {
      return this.entries.views ? this.entries.views : 0
    },

    propertyListed () {
      return this.entries.listed ? this.entries.listed : 0
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
