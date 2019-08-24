import StartupMixins from '~/mixins/startup'
import BrandLogo from '~/components/BrandLogo.vue'

export default {
  layout: 'blank/template',

  components: {
    BrandLogo
  },

  mixins: [
    StartupMixins
  ]
}
