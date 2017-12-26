<template>
  <div id="app-layout">
    <div class="app-head">head</div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-slideshow">slideshow
    </div>
    <div class="app-foot">foot</div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  }
  #app-layout {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    height: 100%;
    min-height: 100%;
    width: 100%;
    background: #b3cccc
  }
  .app-head {
    background: #08335e;
    width: 100%;
    height: 50px;
    line-height: 50px;
    z-index: 10
  }
  .app-content {
    display: flex;
    /* flex-direction: row;
    justify-content: space-around; */
    min-height: 100%;
    height: 100%;
  }
  .app-foot {
    background: #3973ac;
    width: 100%;
    line-height: 20px;
    /* 固定显示在屏幕底部
    position: fixed;
    bottom: 0px; */
  }
  .app-slideshow {
    background: #ffb3b3;
    width: 100%;
    line-height: 120px
  }
  .app-map {
    background: #f2f2f2;
    width: 50%;
    /* height: 200px; */
    flex: 1
  }
  .app-record {
    background: #d98c8c;
    width: 50%;
    flex: 1
  }

</style>
