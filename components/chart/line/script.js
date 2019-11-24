import LineChart from './linechart'

export default {
  components: {
    LineChart
  },

  data () {
    return {
      datacollection: null
    }
  },

  mounted () {
    this.fillData()
  },

  methods: {
    fillData () {
      this.datacollection = {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [5, 10, 20, 30, 40, 50]
          }
        ]
      }
    },

    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
