import Vue from 'vue'
import Vuex from 'vuex'
import background from './modules/background'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staticURL: process.env.VUE_APP_PRIVATE_URL
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    data: background
  }
})
