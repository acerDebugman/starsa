<template>
  <el-container>
    <el-header style="padding:0px">
      <el-row>
        <el-menu :default-active="currentPath"
                 class="el-menu-demo" mode="horizontal"
                 background-color="#fff"
                 router
                 text-color="#000"
                 active-text-color="#333"
                 style="height:100px;align-content: center"
                 @select="handleSelect">
          <span>
          <el-menu-item index="/home_service"><img :src="dlogo"/></el-menu-item>
          <el-menu-item index="/visa_service">处理中心</el-menu-item>
          <el-menu-item index="/account_service">处理中心</el-menu-item>
          <el-menu-item index="/value_add_service">处理中心2</el-menu-item>
          <el-menu-item index="/about_us">订单管理</el-menu-item>
            </span>
        </el-menu>
      </el-row>
    </el-header>
    <el-main id="segment-main" style="overflow-y: auto">
      <div>
        <transition name="fade"
                    mode="out-in">
          <router-view/>
        </transition>
      </div>
    </el-main>
    <el-footer style="overflow-y: auto">Footer</el-footer>
  </el-container>
</template>
<script>
  import dlogo from "@/assets/images/dplogo.png"

  export default  {
    name: "main",
    components: {},

    data() {
      return {
        contact_us: "www.baidu.com",
        usage_info: "www.baidu.com",
        activeIndex: '1',
        activeIndex2: '1',
        screenHeight: window.innerHeight,
        dlogo: dlogo,
        currentPath: "/home_service"
      }
    },
    mounted: function () {
//      console.log("joe")
      console.log(this.screenHeight);
      let h = this.screenHeight - 60 - 60;
      document.getElementById('segment-main').style.height = h + "px";//页面初始化
      //document.getElementById('segment-main-container').style.minHeight = h - 95 + "px";//页面初始化
      window.onresize = () => {
        return (() => {
          this.screenHeight = window.innerHeight;
        })()
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    watch: {
      screenHeight (val) {
        this.screenHeight = val;
        let h = this.screenHeight - 60 - 60;
        document.getElementById('segment-main').style.height = h + "px";//检测窗口的大小，并赋值
        //document.getElementById('segment-main-container').style.height = h - 95 + "px";//页面初始化
      }
    }
  }
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    overflow: auto;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    overflow: auto;
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
</style>
