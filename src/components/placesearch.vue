<template>
  <div id="cont-plcsrch">
    <input id="keyword" type="text" v-model="storename"></input>
    <button @click="search">搜索</button>
    <p>{{storename}}</p>
  </div>
</template>
<script>
  import AMap from 'AMap'
  import GDmap from '../components/map'
  // var placeSearch
  export default {
    data () {
      return {
        storename: ''
      }
    },
    mounted () {
      this.init()
    },

    methods: {
      init () {
        AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
          // var autoOptions = {
          //   city: "北京",
          //   input: "keyword",
          //   type: '风景名胜'
          // }
          // var autocomplete= new AMap.Autocomplete(autoOptions);
          var placeSearch = new AMap.PlaceSearch({
                city:'北京',
                map:GDmap.map,
          })
          // placeSearch.search('绿茶', function(status, result) {
          // })
          // AMap.event.addListener(autocomplete, "select", function(e){
          //    placeSearch.setCity(e.poi.adcode);
          //    placeSearch.search(e.poi.name)
          // })
        })
      },
      search () {

      }
    }
  }
</script>
<style>
  #cont-plcsrch {
    /* width:100%;
    height:100% */
  }
</style>
