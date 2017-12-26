// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import IndexPage from './pages/index'
import Layout from './components/layout'
// import VueAMap from 'vue-amap'
import store from './store/index'
import router from './router'

// Vue.use(VueAMap)
//
// VueAMap.initAMapApiLoader({
//   key: 'f9edabd1528a5a92d15238b7a53765c9',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
// })
Vue.config.productionTip = false
//eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
