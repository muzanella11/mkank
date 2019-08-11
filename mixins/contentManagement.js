export default {
  data () {
    return {}
  },

  computed: {
    activeLanguage () {
      return window.localStorage.getItem('lang') || 'english'
    }
  },

  methods: {
    getContentManagement (ConfigLanguage) {
      return ConfigLanguage.find(item => item.lang === this.activeLanguage).data || {}
    }
  }
}
