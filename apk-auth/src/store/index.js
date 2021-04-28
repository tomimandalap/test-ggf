import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    privatURL: process.env.VUE_APP_URL,
    id: localStorage.getItem('id') || null,
    token: localStorage.getItem('token') || null,
    detailUser: {}
  },
  getters: {
    getURL: state => state.privatURL,
    getID: state => state.id,
    getToken: state => state.token,
    detailUser: state => state.detailUser
  },
  mutations: {
    setID (state, payload) {
      state.id = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    setDetailUser (state, payload) {
      state.detailUser = payload
    }
  },
  actions: {
    registerUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.privatURL}/register`, data).then((response) => {
          resolve(response.data)
        }).catch((error) => {
          reject(error.response)
        })
      })
    },
    loginUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.privatURL}/login`, data).then((response) => {
          localStorage.setItem('id', response.data.data.id)
          localStorage.setItem('token', response.data.data.token)
          context.commit('setID', response.data.data.id)
          context.commit('setToken', response.data.data.token)
          resolve(response.data)
        }).catch((error) => {
          reject(error.response)
        })
      })
    },
    logoutUser (context) {
      return new Promise((resolve) => {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        context.commit('setID', null)
        context.commit('setToken', null)
        resolve(true)
      })
    },
    getDetailUser (context, id) {
      axios.get(`${context.rootState.privatURL}/users/${id}`, {
        headers: {
          token: `${context.rootState.token}`
        }
      }).then((response) => {
        context.commit('setDetailUser', response.data.data)
      }).catch((error) => {
        console.log(error.response)
      })
    },
    updateUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.patch(`${context.rootState.privatURL}/update/${data.id}`, data.file, {
          headers: {
            token: `${context.rootState.token}`
          }
        }).then((response) => {
          resolve(response.data)
        }).catch((error) => {
          reject(error.response)
        })
      })
    },
    checkLocation (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.privatURL}/location/${data.id}`, data, {
          headers: {
            token: `${context.rootState.token}`
          }
        }).then((response) => {
          resolve(response.data)
        }).catch((error) => {
          reject(error.response)
        })
      })
    }
  },
  modules: {
  }
})
