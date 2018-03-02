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
          this.$store.commit('getname', newValue);
        }
      }
    },
    mounted () {
      // this.init()
    },
    methods: {
      search () {
        this.$emit('plcsearch')
      },
      // inputname ( e ) {
      //   debugger
      //   this.$store.commit('getname', this.storename);
      // },
      change ( e ) {
        this.storename = e.srcElement.value;

      }
    }
  }
</script>
<style>
</style>
