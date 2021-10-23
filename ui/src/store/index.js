import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    site: {
      route: ''
    }
  },
  mutations: {
    setSite(state, data) {
      state.site = data
    },
    setRoute(state, data) {
      state.site.route = data
    }
  },
  actions: {
  },
  modules: {
  }
})
