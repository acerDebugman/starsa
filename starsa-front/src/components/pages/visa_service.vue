<template>

  <div class="block">
    <el-carousel id="show-img" height="100%">
      <el-carousel-item v-for="item in images" :key="item">
        <a href="visa_service" target="_blank">
          <img :src="item" style="height: 100%;width: 100%;"/>
        </a>
      </el-carousel-item>
    </el-carousel>
    <div>
      joe zhang
    </div>
  </div>
</template>
<script>
  import show1 from "@/assets/images/sa-flag.jpg"
  import show2 from "@/assets/images/mz2.jpg"
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    data() {

      return {
        images: [show1, show2],
        screenHeight: window.innerHeight
      }
    },
    mounted: function () {
      console.log(this.screenHeight);
      let h = this.screenHeight ;
      document.getElementById('show-img').style.height = h + "px";//页面初始化
//      document.getElementById('segment-main-container').style.minHeight = h - 95 + "px";//页面初始化
      window.onresize = () => {
        return (() => {
          this.screenHeight = window.innerHeight;
        })()
      };
    },
    watch: {
      screenHeight: function (val) {
        this.screenHeight = val;
        let h = this.screenHeight ;
        document.getElementById('show-img').style.height = h + "px";//检测窗口的大小，并赋值
      }
    }
  }
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
