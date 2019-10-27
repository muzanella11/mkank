import BrandLogo from '~/components/BrandLogo.vue'
import EnemCardCalculatorCount from '~/components/cards/cardcalculatorcount/template.vue'
import EnemButtonOption from '~/components/inputs/ButtonOption/template.vue'
import EnemCards from '~/components/cards/carddefault/template.vue'

export default {
  layout: 'blank/template',

  components: {
    BrandLogo,
    EnemCardCalculatorCount,
    EnemButtonOption,
    EnemCards
  },

  data () {
    return {
      question: {
        propertyType: [
          {
            label: 'Sale',
            value: 'sale'
          },
          {
            label: 'Rent',
            value: 'rent'
          }
        ]
      },
      entryObject: {
        propertyType: 'sale',
        totalPrice: 8000,
        divideProfitPerMonth: false,
        duration: 0
      },
      entry: []
    }
  },

  methods: {
    backStep () {
      window.location = '/dashboard'
    },

    addProperty () {
      const data = Object.assign({}, this.entryObject)
      this.entry.push(data)
    },

    removeProperty (indexItem) {
      this.entry.splice(indexItem, 1)
    },

    resetProperty () {
      this.entry = []
    },

    setPropertyType (index, value) {
      const data = this.entry[index]

      this.entry[index] = Object.assign(data, {
        divideProfitPerMonth: value === 'rent',
        propertyType: value,
        duration: undefined
      })
    }
  }
}
