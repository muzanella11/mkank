export default {
  props: {
    title: {
      type: String,
      default: 'Button Option'
    },
    entries: {
      type: Array,
      default: () => [
        {
          label: 'Option 1',
          value: '1'
        },
        {
          label: 'Option 2',
          value: '2'
        }
      ]
    },
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      selected: ''
    }
  },

  watch: {
    'selected' (val) {
      if (val) {
        this.$emit('input', val)
      }
    },

    'value' (val) {
      this.selected = val
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.selected = this.value
    },

    isActived (itemButton) {
      return itemButton && itemButton.value === this.selected
    },

    setSelected (itemButton) {
      this.selected = itemButton.value
    }
  }
}
