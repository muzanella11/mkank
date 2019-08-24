export default {
  props: {
    placeholder: {
      type: String,
      default: 'Sliders'
    }
  },
  data () {
    return {
      min: 0,
      max: 90,
      slider: 40,
      range: [0, 70]
    }
  }
}
