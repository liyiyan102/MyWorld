import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    storename: '',
    storeadds: ''
  },
  mutations: {
    getname (state, name) {
      this.state.storename = name
      console.log(this.state.storename)
    },
    getadds (state, adds) {
      this.state.storeadds = adds
      console.log(this.state.storeadds)
    }
  }
})

export default store
