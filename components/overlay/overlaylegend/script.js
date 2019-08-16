import OverlayFixed from './../overlayfixed/template.vue'
import OverlayMixins from './../../../mixins/overlay'

export default {
  mixins: [
    OverlayMixins
  ],

  components: {
    OverlayFixed
  },

  data () {
    return {
      listLegend: [
        {
          label: 'Home',
          color: 'green',
          value: 'home'
        },
        {
          label: 'Compound',
          color: 'purple',
          value: 'compound'
        },
        {
          label: 'Apartement',
          color: 'blue',
          value: 'apartement'
        },
        {
          label: 'Comestores',
          color: 'yellow',
          value: 'comestores'
        },
        {
          label: 'Villa',
          color: 'red',
          value: 'villa'
        },
        {
          label: 'Office',
          color: 'orange',
          value: 'office'
        },
        {
          label: 'Lands',
          color: 'pink',
          value: 'lands'
        }
      ]
    }
  }
}
