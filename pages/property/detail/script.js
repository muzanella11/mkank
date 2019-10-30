import EnemCardPropertyDetail from '~/components/cards/cardpropertydetail/template.vue'
import EnemCardCalculator from '~/components/cards/cardcalculator/template.vue'
import EnemDialogPropertyInformation from '~/components/dialog/dialogpropertyinformation/template.vue'
import { mapActions, mapState } from 'vuex'
import * as PROPERTYTYPES from '~/store/modules/property/types'
import Moment from 'moment'

export default {
  layout: 'propertydetail/template',

  components: {
    EnemCardPropertyDetail,
    EnemCardCalculator,
    EnemDialogPropertyInformation
  },

  data () {
    return {
      dialogPropertyInformation: false
    }
  },

  computed: {
    ...mapState({
      detailRaw: state => state.property.propertyDetail
    }),

    propertyDetail () {
      return this.detailRaw
    },

    propertyFacilites () {
      return this.detailRaw.facilites
    },

    propertyInformation () {
      return {
        location: this.detailRaw.address,
        details: this.detailRaw.details
      }
    },

    propertySimilar () {
      return [
        {
          id: 3,
          name: 'alkhor',
          color: 'yellow',
          price: '100 QAR',
          latitude: '25.6849517822265',
          longitude: '51.5021667480468'
        }
      ]
    },

    propertyOwner () {
      return this.detailRaw.owner || {}
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapActions({
      fetchDetail: PROPERTYTYPES.FETCH_PROPERTY_DETAIL
    }),

    init () {
      const id = this.$route.query.q
      this.fetchDetail(id)

      setTimeout(() => {
        this.initMap()
      }, 1000)
    },

    initMap () {
      /* eslint-disable */
      if (this.propertySimilar.length === 0) {
        return
      }

      var map = new google.maps.Map(document.getElementById('similarMap'), {
        disableDefaultUI: true,
        center: {
          lat: 25.2571207,
          lng: 51.5514001
        },
        zoom: 15,
        streetViewControl: false
      })

      var infowindow = new google.maps.InfoWindow()
      var marker

      this.propertySimilar.forEach((itemLocation, indexLocation) => {
        let url = `http://maps.google.com/mapfiles/ms/icons/${itemLocation.color ? itemLocation.color : 'green'}-dot.png`

        marker = new google.maps.Marker({
          position: new google.maps.LatLng(itemLocation.latitude, itemLocation.longitude),
          map: map,
          animation: google.maps.Animation.DROP,
          icon: {
            url: url
          }
          // icon: {
          //   path: 'M22-48h-44v43h16l6 5 6-5h16z',
          //   fillColor: '#00CCBB',
          //   fillOpacity: 1,
          //   strokeColor: '',
          //   strokeWeight: 0
          // },
          // map_icon_label: '<span class="map-icon map-icon-point-of-interest">xxx</span>'
        })

        new google.maps.event.addListener(marker, 'click', (function(marker) {
          return function() {
            infowindow.setContent(itemLocation.name);
            infowindow.open(map, marker);
          }
        })(marker));
      })
    },

    backStep () {
      this.$router.go(-1)
    },

    calculatorCountPage () {
      window.location = 'calculator'
    },

    setDialogPropertyInformation (val) {
      this.dialogPropertyInformation = val
    },

    dateJoin (date) {
      return `Since ${Moment(date).format('DD MMM YYYY')}`
    }
  }
}
