import EnemCardProperty from '~/components/cards/cardproperty/template.vue'
import EnemFilterSticky from '~/components/filtersticky/template.vue'
import { mapGetters } from 'vuex'
import * as TYPES from '~/store/modules/explore/types'

export default {
  components: {
    EnemCardProperty,
    EnemFilterSticky
  },

  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      mapsContext: {},
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },

  computed: {
    ...mapGetters({
      entries: TYPES.GET_ENTRIES_FEATURE
    })
  },

  watch: {
    'entries': {
      deep: true,
      handler: function () {
        this.initMap()
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.initMap()
    },

    initMap () {
      /* eslint-disable */
      if (this.entries.length === 0) {
        return
      }

      var map = new google.maps.Map(document.getElementById('map'), {
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

      this.entries.forEach((itemLocation, indexLocation) => {
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
    }
  }
}
