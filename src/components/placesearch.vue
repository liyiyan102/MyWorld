<template>
  <div id="cont-plcsrch">
    <!-- <input id="plcinput" type="text" v-model="storename"
      @input="inputname" @change="change"> -->
    <input id="plcinput" type="text" v-model="storename">
    </input>
    <button @click="search">搜索</button>
    <p>{{storename}}</p>
  </div>
</template>
<script>
  import AMap from 'AMap'
  // import GDmap from '../components/map'
  export default {
    // data () {
    //   return {
    //     storename: ''
    //   }
    // },
    computed: {
      storename: {
        get: function() {
          return this.$store.state.storename;
        },
        set: function( newValue ) {
          // debugger
          this.$store.commit('getname', newValue);
        }
      }
    },
    mounted () {
      // this.init()
    },
    methods: {
      // init () {
      //
      //   AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function () {
      //     //eslint-disable-next-line
      //     // var placeSearch = new AMap.PlaceSearch({
      //     //   map: GDmap.map,
      //     //   type: '050000'
      //     // })
      //     var autoOptions = {
      //       input: 'plcinput',
      //       city: '北京',
      //       type: '050000'
      //     }
      //     var autocomplete = new AMap.Autocomplete(autoOptions)
      //     var placeSearch = new AMap.PlaceSearch({
      //       map: GDmap.init(),
      //       city: '北京',
      //       type: '050000'
      //     })
      //     AMap.event.addListener(autocomplete, 'select', function (e) {
      //       placeSearch.setCity(e.poi.adcode)
      //       placeSearch.search(e.poi.name, function (status, result) {
      //         if (result.poiList.count == 1) {
      //           console.log("1");
      //           // this.$store.commit('getadds', result.poiList.pois[0].address)
      //
      //         }
      //         console.log(result.poiList)
      //       })
      //     })
      //   })
      //
      // },
      search () {
        this.$emit('plcsearch')
      },
      // inputname ( e ) {
      //   debugger
      //   this.$store.commit('getname', this.storename);
      // },
      change ( e ) {
        this.storename = e.srcElement.value;

        // this.$store.commit('getname', this.storename)

      }
    },
    // watch: {
    //   this.$els.plcinput1.value: function () {
    //     console.log(this.$els.plcinput1.value)
    //   }
    // }
  }
</script>
<style>
</style>
