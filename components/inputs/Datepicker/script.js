export default {
  props: {
    placeholder: {
      type: String,
      default: 'Datepicker'
    },
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      date: '',
      menu: false,
      modal: false
    }
  },

  watch: {
    'value' (value) {
      this.date = value
    },

    'date' (value) {
      this.$emit('input', value)
    }
  }
}
