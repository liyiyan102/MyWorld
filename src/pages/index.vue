<template>
  <div class="app-index">
    <div class="app-record">
      recordhah
      <div class="addnew">
        <div class="storename">
          <span>商户：</span>
          <placeSearch @plcsearch="searchclick"></placeSearch>
        </div>
        <div class="storetype">
          <span>类型：</span>
          <select v-model="type">
            <option v-for="item in typelist">{{item}}</option>
          </select>
        </div>
        <div class="storeads">
          <span>地址：</span>
          <input/>
        </div>
        <div class="storepic">
          <span>上传图片：</span>
          <input type="text">
          </input>
          <button>选择路径</button>
          <button>上传</button>
        </div>
        <div class="storecom">
          <span>小记：</span>
          <textarea></textarea>
        </div>
        <button>添加记录</button>
      </div>
    </div>
    <div class="app-map">
      <GDmap></GDmap>
    </div>
  </div>
</template>

<script>
import GDmap from '../components/map'
import placeSearch from '../components/placesearch'
export default {
  components: {GDmap, placeSearch},
  data () {
    return {
      type: '',
      typelist: [
        '徽菜', '淮扬菜', '火锅', '日料', '烧烤',
        '粤菜', '湘菜', '川菜', '西餐', '自助餐',
        '甜品糕点', '快餐', '小吃'
      ]
    }
  },
  methods: {
    searchclick () {

    }
  }
}
</script>

<style>
  .app-index {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    min-height: 100%;
    background: #ccc;
    height: 100%;
  }
  .app-map {
    background: #f2f2f2;
    width: 50%;
    flex: 1
  }
  .app-record {
    background: #d98c8c;
    width: 50%;
    flex: 1
  }
</style>
