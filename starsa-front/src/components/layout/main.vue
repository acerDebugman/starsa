<template>
  <el-container>
    <el-header style="padding:0px; height: auto; position: absolute;z-index: 2">
      <el-menu :default-active="currentPath"
               class="el-menu-demo" mode="horizontal"
               background-color="transparent"
               router
               text-color="#fff"
               active-text-color="#f00"
               style="height:100%;align-content: center;"
               @select="handleSelect">
        <el-menu-item index="/home_service">
          <img :src="dlogo" style="height: auto; width: auto;"/>
        </el-menu-item>
        <el-menu-item index="/visa_service">解决方案</el-menu-item>
        <el-menu-item index="/account_service">新闻与洞察</el-menu-item>
        <el-menu-item index="/value_add_service">营销科学院</el-menu-item>
        <el-menu-item index="/about_us">关于我们</el-menu-item>
        <el-menu-item index="/chinese" style="padding:0px 40px 0px 0px;float: right">中文
        </el-menu-item>
        <el-menu-item :index="currentPath" style="padding:0px 3px 0px 3px;float: right">|
        </el-menu-item>
        <el-menu-item index="/english" style="padding:0px 0px 20px 20px;float: right;">
          English
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main id="segment-main"
             style="overflow-y: auto;padding:0px;position: relative;top:0px;z-index: 1">
      <div>
        <transition name="fade"
                    mode="out-in">
          <router-view/>
        </transition>
      </div>
    </el-main>
    <el-footer style="">


      <div style="border-bottom: 1px solid #ccc;margin:0"></div>
      <div style="width:87%;margin:30px auto;">
        <div style="overflow: hidden;margin: 0 auto;padding: 0;height:440px">
          <div style="float:left;height:100%; border:0px solid #f00;width:20%">
            <p class="footer-title">MiaoZhen</p>
            <p>关于秒针</p>
            <p>
              <router-link to="visa_service">
                kkk
              </router-link>
            </p>
            <p>
            <router-link to="visa_service">
              zhang joe
            </router-link>
            </p>
          </div>
          <div style="float:left; height:90%; border:0px solid #f00; width:20%;">
            <p class="footer-title">产品&解决方案</p>
            <p>关于秒针</p>
          </div>
          <div style="float:left; height:90%; border:0px solid #f00; width:20%;">
            <p class="footer-title">热门问题</p>
          </div>
          <div style="float: left; height:90%; border:0px solid #f00; width:40%;">
            <p class="footer-title">logo</p>
            <a target="_blank" href="http://weibo.com/miaozhensystems" class="sina1">joe</a>
          </div>
        </div>
        <div style="border-bottom: 1px solid #808080;margin:0"></div>
        <div>
          <strong>Copyright</strong>
          © 207 Miaozhen Systems. All Rights Reserved. 京公网安备 11010502030033号
        </div>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
  import dlogo from "@/assets/images/mzlogo.png"

  export default  {
    name: "main",
    components: {},

    data() {
      return {
        contact_us: "www.baidu.com",
        usage_info: "www.baidu.com",
        activeIndex: '1',
        activeIndex2: '1',
        dlogo: dlogo,
        currentPath: "/home_service"
      }
    },
    mounted: function () {
      console.log(window.innerHeight);
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.currentPath = key
      }
    },
    watch: {}
  }
</script>
<style>
  .el-header {
    background-color: transparent;
    width: 100%;
    color: #333;
    text-align: center;
  }

  .el-footer {
    background-color: #262626;
    color: #808080;
    text-align: center;
    line-height: 20px;
    padding: 0;
    height: auto !important;
  }

  .el-main {
    background-color: transparent;
    color: #333;
    text-align: center;
    line-height: 160px;
    overflow: hidden;
    min-height: 200px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu-item, .el-submenu__title {
    padding: 0 30px
  }

  .el-menu--horizontal .el-menu-item:hover {
    background-color: transparent !important;
    color: #f00 !important;
  }

  .sina1 {
    width: 34px;
    height: 27px;
    background: url('../../assets/images/img15.png') no-repeat;
  }

  .footer-title {
    font-size: 24px;
    color: #ccc;
  }
</style>
