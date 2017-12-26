<template>
  <div>
    <!-- <input id="keyword" type="text" v-model="storename" @input="inputname"></input> -->
  <div id="cont-map" style="width:300px;height:600px">
  </div>
</div>
</template>
<script>
  import AMap from 'AMap'
  var map
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
      inputname () {
        this.$store.commit('getname', this.storename)

      },
      init () {
        // var windowsArr = [];
        // var marker = [];
        var map = new AMap.Map("cont-map", {
                resizeEnable: true,
                center: [116.397428, 39.90923],
                zoom: 10,
                keyboardEnable: false
        })
        AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
          var autoOptions = {
            city: "北京",
            input: "keyword",
          }
          var autocomplete= new AMap.Autocomplete(autoOptions);
          var placeSearch = new AMap.PlaceSearch({
                city:'北京',
                map:map,
          })
          AMap.event.addListener(autocomplete, "select", function(e){
             placeSearch.setCity(e.poi.adcode);
             placeSearch.search(e.poi.name)
          })
        })

      }
    }
  }
</script>
<style>
  /* #cont-map {
    width:100%;
    height:100%
  } */
</style>
