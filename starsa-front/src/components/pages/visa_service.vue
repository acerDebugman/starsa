<template>
  <div class="block">
    <el-carousel height="600px">
      <el-carousel-item v-for="item in images" :key="item">
        <a href="visa_service" target="_blank">
          <img :src="item" style="height: 100%;width: 100%;"/>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  import show1 from "@/assets/images/mz1.png"
  import show2 from "@/assets/images/mz2.jpg"

  export default {
    data() {

      return {
        images: [show1, show2]
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
