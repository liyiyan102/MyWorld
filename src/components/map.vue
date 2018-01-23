<template>
  <!-- <div> -->
  <div id="cont-map">
  </div>
  <!-- <button type="button" name="button" @click="chuandi">chuandi</button> -->

  <!-- </div> -->
</template>
<script>
  import AMap from 'AMap'
  var list
  export default {
    data () {
      return {
        storename: '',
        searchresult: {}
      }
    },
    mounted () {
      this.init()

    },
    methods: {
      chuandi (){
        this.$store.commit('getadds', list.pois[0].address)
      },
      init () {
        //eslint-disable-next-line
        var map = new AMap.Map('cont-map', {
          resizeEnable: true,
          center: [116.397428, 39.90923],
          zoom: 10,
          keyboardEnable: false
        })
        debugger
        var scope = this;
        AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'],() => {
          var autoOptions = {
            input: 'plcinput',
            city: '北京',
            type: '050000'
          }
          debugger
          var a = this;
          var autocomplete = new AMap.Autocomplete(autoOptions)
          var placeSearch = new AMap.PlaceSearch({
            map: map,
            city: '北京',
            type: '050000'
          })
          AMap.event.addListener(autocomplete, 'select', (e) => {
            debugger
            
            var b = this;
            // debugger
            placeSearch.setCity(e.poi.adcode);
            scope.$store.commit('getname', e.poi.name);
            placeSearch.search(e.poi.name, (status, result) => {
              list = result.poiList
              // searchresult = result.poiList
              console.log(result.poiList)
                if (list.count == 1) {
                  console.log("1");
                  scope.$store.commit('getadds', result.poiList.pois[0].address)

                  // console.log(list.pois[0].address);

                }
            })
          })
        })
      },
    }
  }
</script>
<style>
  #cont-map {
    width:100%;
    height:100%
  }
</style>
