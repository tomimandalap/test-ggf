import axios from 'axios'
const background = {
  namespaced: true,
  state: {
    dataGlobal: {},
    dataLocal: [],
    lat: '',
    long: '',
    region: [],
    dataDetails: []
  },
  getters: {
    getData: state => state.dataGlobal,
    getLocal: state => state.dataLocal,
    getLat: state => state.lat,
    getLong: state => state.long,
    getRegion: state => state.region,
    getDataDetails: state => state.dataDetails
  },
  mutations: {
    setDataGlobal (state, payload) {
      state.dataGlobal = payload
    },
    setDataLocal (state, payload) {
      state.dataLocal = payload
    },
    setLat (state, payload) {
      state.lat = payload
    },
    setLong (state, payload) {
      state.long = payload
    },
    setRegion (state, payload) {
      state.region = payload
    },
    setDataDetails (state, payload) {
      state.dataDetails = payload
    }
  },
  actions: {
    getGlobalData (context) {
      axios.get(`${context.rootState.staticURL}/reports/total`).then((response) => {
        // console.log(response.data.data)
        context.commit('setDataGlobal', response.data.data)
      }).catch((error) => {
        console.log(error.response)
      })
    },
    getGlobalLocal (context) {
      axios.get(`${context.rootState.staticURL}/reports?q=Indonesia&iso=IDN&region_name=Indonesia`).then((response) => {
        // console.log(response.data.data[0])
        context.commit('setDataLocal', response.data.data)
        context.commit('setLat', response.data.data[0].region.lat)
        context.commit('setLong', response.data.data[0].region.long)
      }).catch((error) => {
        console.log(error.response)
      })
    },
    getListRegion (context) {
      axios.get(`${context.rootState.staticURL}/regions`).then((response) => {
        // console.log(response.data)
        context.commit('setRegion', response.data.data)
      }).catch((error) => {
        console.log(error.response)
      })
    },
    getReports (context, data) {
      axios.get(`${context.rootState.staticURL}/reports?date=${data.date}&q=${data.sort.name}&iso=${data.sort.iso}&region_name=${data.sort.name}`).then((response) => {
        // console.log(response.data.data)
        context.commit('setDataDetails', response.data.data)
      }).catch((error) => {
        console.log(error.response)
      })
    }
  }
}
export default background
