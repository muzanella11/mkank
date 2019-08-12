import EnemCards from './../carddefault/template.vue'
import EnemDatePicker from './../../inputs/Datepicker/template.vue'

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
    return {}
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
    }
  },

  methods: {
    btnAction (title) {
      if (this.wizardActive === 1) {
        window.localStorage.setItem('lang', title.toLowerCase())
        this.$router.push({ path: 'startup', query: { wizard: 2 } })
      } else if (this.wizardActive === 2) {
        this.$router.push({ path: 'auth/signin', query: { role: title.toLowerCase() } })
      }
    }
  }
}
