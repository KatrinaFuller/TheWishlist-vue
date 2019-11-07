import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let baseUrl = location.host.includes('localhost') ? 'https://localhost:5001/' : '/'

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
