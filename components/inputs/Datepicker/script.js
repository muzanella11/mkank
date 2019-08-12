export default {
  props: {
    placeholder: {
      type: String,
      default: 'Datepicker'
    }
  },
  data () {
    return {
      date: '',
      menu: false,
      modal: false
    }
  }
}
