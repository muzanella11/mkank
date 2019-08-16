import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA29He5dv2fjHNQt6ithtP8HriCoA8MwH4',
    libraries: 'places' // necessary for places input
  }
})
