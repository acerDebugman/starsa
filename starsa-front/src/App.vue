<template>
  <div id="app">
    <transition name="fade"
                mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, Tahoma;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    overflow-y: auto;
    overflow-x: auto;
    background: #fcfcfc ;
    min-width: 1300px !important;
    min-height: 700px !important;
  }

  .el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: 0px solid #F9591E !important;
    background-color: transparent !important;
    color: #2d2f33;
  }

  .el-menu--horizontal .el-menu-item {
    border-bottom: 0px solid #F9591E !important;
  }

  .el-menu--horizontal {
    border-right: none;
    border-bottom: solid 0px #e6e6e6 !important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
