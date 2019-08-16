import EnemCardProperty from '~/components/cards/cardproperty/template.vue'
import EnemFilterSticky from '~/components/filtersticky/template.vue'

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

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.initMap()
    },

    initMap () {
      /* eslint-disable */
      const locations = [
        [
          'name location',
          '-6.1823631',
          '106.8227809',
          'yellow'
        ],
        [
          'name location sss',
          '-6.1831055',
          '106.8226126',
          'blue'
        ],
        [
          'name location aaa',
          '-6.1714854',
          '106.8292318',
          'green'
        ],
        [
          'name location bbb',
          '-6.1767059',
          '106.828464',
          'red'
        ],
        [
          'name location ccc',
          '-6.1763968',
          '106.8194014',
          'pink'
        ],
        [
          'name location ddd',
          '-6.1701812',
          '106.8219857',
          'purple'
        ],
        [
          'name location eee',
          '-6.1667163',
          '106.8282843',
          'orange'
        ]
      ]

      var map = new google.maps.Map(document.getElementById('map'), {
        disableDefaultUI: true,
        center: {
          lat: -6.1753871,
          lng: 106.8249641
        },
        zoom: 15,
        streetViewControl: false
      })

      var infowindow = new google.maps.InfoWindow()
      var marker

      locations.forEach((itemLocation, indexLocation) => {
        let url = "http://maps.google.com/mapfiles/ms/icons/"
        url += itemLocation[3] + "-dot.png"

        marker = new google.maps.Marker({
          position: new google.maps.LatLng(itemLocation[1], itemLocation[2]),
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
            infowindow.setContent(itemLocation[0]);
            infowindow.open(map, marker);
          }
        })(marker));
      })
    }
  }
}
