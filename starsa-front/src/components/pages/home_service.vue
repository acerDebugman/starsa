<template xmlns="http://www.w3.org/1999/html">

  <div class="block">
    <el-carousel id="show-img" height="100%">
      <el-carousel-item v-for="item in images" :key="item" >
        <router-link to="#" target="_blank" style="cursor:pointer" @click="goto(item)">
          <img :src="item" style="height: 100%;width: 100%;"/>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 40px auto;">
      <div style="text-align: left; margin-left:20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">解决方案</p>
        <p class="to-center" style="color:#ccc">XSTAR SOLUTIONS
          <a href="/visa_service" target="_blank" style="float:right;">更多</a>
        </p>
      </div>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="require('@/assets/images/hamburger.png')" class="image">
            <div style="padding: 14px;">
              <div style="">好吃的汉堡</div>
              <div>好吃的汉堡2</div>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="require('@/assets/images/hamburger.png')" class="image">
            <div style="padding: 14px;">
              <div style="">好吃的汉堡</div>
              <div>好吃的汉堡2</div>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import show1 from "@/assets/images/mz1.png"
  import show2 from "@/assets/images/mz2.jpg"
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    data() {

      return {
        images: [show1, show2],
        screenHeight: window.innerHeight,
        currentDate: new Date()
      }
    },
    mounted: function () {
      console.log(this.screenHeight);
      let h = this.screenHeight;
      document.getElementById('show-img').style.height = h + "px";//页面初始化
//      document.getElementById('segment-main-container').style.minHeight = h - 95 + "px";//页面初始化
      window.onresize = () => {
        return (() => {
          this.screenHeight = window.innerHeight;
        })()
      };
    },
    methods: {
      goto : function (item) {
        //this.$router.push("/visa_service")
        window.open("http://localhost:8080/#/visa_service")
      }
    },
    watch: {
      screenHeight: function (val) {
        this.screenHeight = val;
        let h = this.screenHeight;
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

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
