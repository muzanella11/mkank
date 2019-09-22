import CardListingMixins from '~/mixins/cardListing'

export default {
  data () {
    return {
      checkbox1: true,
      checkbox: false
    }
  },
  mixins: [
    CardListingMixins
  ]
}
