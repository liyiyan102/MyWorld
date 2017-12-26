import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    storename: ''
  },
  mutations: {
    getname (state, name) {
      this.state.storename = name
      console.log(this.state.storename)
    }
  }
})

export default store
