import EnemDialogFilter from '~/components/dialog/dialogfilter/template.vue'
import EnemDialogSort from '~/components/dialog/dialogsort/template.vue'
import EnemDialogTypes from '~/components/dialog/dialogtypes/template.vue'

export default {
  components: {
    EnemDialogFilter,
    EnemDialogSort,
    EnemDialogTypes
  },

  data () {
    return {
      dialogTypes: false,
      dialogFilter: false,
      dialogSort: false
    }
  },

  methods: {
    setDialogTypes (val) {
      this.dialogTypes = val
    },

    setDialogFilter (val) {
      this.dialogFilter = val
    },

    setDialogSort (val) {
      this.dialogSort = val
    }
  }
}
