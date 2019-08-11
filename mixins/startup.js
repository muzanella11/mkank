import EnemCardOnBoarding from '~/components/cards/cardonboarding/template.vue'
import { ChooseLanguage, ChooseRole } from '~/lang'
import ContentManagement from './contentManagement'

export default {
  mixins: [
    ContentManagement
  ],

  components: {
    EnemCardOnBoarding
  },

  data () {
    return {
      entries: {
        greetings: 'Welcome to',
        boardingData: {
          header: '',
          subHeader: '',
          separator: '',
          wizard: [
            'Language',
            'Buyer/Seller'
          ],
          buttonAction: [
            {
              type: 'language',
              data: [
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
            },
            {
              type: 'role',
              data: [
                {
                  type: 'btn-primary',
                  url: 'javascript:;',
                  title: 'Buyer'
                },
                {
                  type: 'btn-secondary',
                  url: 'javascript:;',
                  title: 'Seller'
                }
              ]
            }
          ]
        }
      }
    }
  },

  computed: {
    isChooseLang () {
      return this.$route.query.wizard === undefined || parseInt(this.$route.query.wizard) === 1
    },

    wizardActive () {
      return this.$route.query.wizard === undefined ? 1 : parseInt(this.$route.query.wizard)
    },

    entriesBoardingData () {
      const buttonAction = this.wizardActive === 1
        ? this.entries.boardingData.buttonAction.find(item => item.type === 'language').data
        : this.wizardActive === 2 ? this.entries.boardingData.buttonAction.find(item => item.type === 'role').data
          : []

      return Object.assign(this.entries, {
        buttonAction: buttonAction
      })
    }
  },

  watch: {
    'wizardActive' (val) {
      this.checkWizardActive()
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.checkWizardActive()
    },

    checkWizardActive () {
      if (this.wizardActive === 1) {
        const dataLang = this.getContentManagement(ChooseLanguage)
        let boardingData = this.entries.boardingData

        boardingData = Object.assign(boardingData, {
          header: dataLang.header,
          subheader: dataLang.subheader,
          separator: dataLang.separator,
          wizard: dataLang.wizard,
          buttonAction: dataLang.buttonAction
        })

        this.entries = Object.assign(this.entries, {
          boardingData: boardingData
        })
      } else if (this.wizardActive === 2) {
        const dataLang = this.getContentManagement(ChooseRole)
        let boardingData = this.entries.boardingData

        boardingData = Object.assign(boardingData, {
          header: dataLang.header,
          subheader: dataLang.subheader,
          separator: dataLang.separator,
          wizard: dataLang.wizard,
          buttonAction: dataLang.buttonAction
        })

        this.entries = Object.assign(this.entries, {
          boardingData: boardingData
        })
      } else {
        this.changePage(1)
      }
    },

    backStep () {
      let step = parseInt(this.$route.query.wizard)

      if (step > 1) {
        step--
        this.changePage(step)
      }
    },

    nextStep () {
      let step = parseInt(this.$route.query.wizard)

      if (step <= 1) {
        step++
        this.changePage(step)
      }
    },

    changePage (step) {
      if (step) {
        this.$router.push({ path: 'startup', query: { wizard: step } })
      }
    }
  }
}
