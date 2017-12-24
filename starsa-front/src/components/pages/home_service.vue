<template xmlns="http://www.w3.org/1999/html">

  <div class="block">
    <el-carousel id="show-img" height="100%">
      <el-carousel-item v-for="item in images" :key="item">
        <router-link to="#" target="_blank" style="cursor:pointer" @click="goto(item)">
          <img :src="item" style="height: 100%;width: 100%;"/>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 40px auto;">
      <div
        style="text-align: left; margin-left:20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">签证类服务</p>
        <p class="to-center" style="color:#ccc">XSTAR VISA SOLUTIONS
          <a href="/visa_service" target="_blank" style="float:right;">更多</a>
        </p>
      </div>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(obj, index) in visaMsgLst" :key="obj" :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <el-card :body-style="{ padding: '0px' }" style="height: 440px;">
            <div style="height:300px;overflow-y: hidden">
              <img :src="visasub[index]" class="image">
            </div>
            <div class="mybox-text" style="padding: 14px;">
              <el-row>{{ obj[0] }}</el-row>
              <el-row>{{ obj[1] }}</el-row>
              <el-row><span>{{ obj[2] }}</span></el-row>
              <el-row>{{ obj[3] }}</el-row>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div
        style="text-align: left; margin-left:20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">会计类服务</p>
        <p class="to-center" style="color:#ccc">XSTAR ACCOUNTING SOLUTIONS
          <a href="/visa_service" target="_blank" style="float:right;">更多</a>
        </p>
      </div>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(msg, index) in accountMsgLst" :key="msg"
                :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <el-card :body-style="{ padding: '0px' }" style="height: 440px;">
            <div style="height: 300px;overflow-y: hidden;">
              <img :src="require('@/assets/images/hamburger.png')" class="image">
            </div>
            <div class="mybox-text" style="padding: 14px;">
              <div style="">{{ msg[0] }}</div>
              <div style="">{{ msg[1] }}</div>
              <div style="">{{ msg[2] }}</div>
              <div style="">{{ msg[3] }}</div>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import show1 from "@/assets/images/sa-flag-slogo2.jpg"
  import show2 from "@/assets/images/cooperation.jpg"
  import visasub1 from "@/assets/images/visa-sub6.jpg"
  import visasub2 from "@/assets/images/visa-sub2.jpg"
  import visasub3 from "@/assets/images/visa-sub5.jpg"

  export default {
    components: {},
    data() {
      let visaMsgs = [
        [
          "南非注册结婚以及南非外交部公证认证",
          "南非小孩出生证明以及外交部公证认证",
          "南非无犯罪等证件",
          "南非未入籍以及退籍申请"],
        [
          "南非永久居留PR申请，ID 申请",
          "贴纸转贴",
          "学生,陪伴,退休,商务考察等签证延期",
          "南非申请美国10年多次往返签证"],
        [
          "进出关南非有逾期,滞留问题解决",
          "进出关口签证类疑难杂症解决",
          "为客户签证进出关南非保驾护航",
          "为商品进出关南非保驾护航"
        ]
      ]
      let accountMsgs = [
        [
          "对市场进入战略和投资结构的策划",
          "跨境及南非的税务筹划,申报",
          "兼并和收购有关的税务筹划",
          "税务知识培训"],
        [
          "记账",
          "管理报告",
          "对员工和管理人员提供南非会计准则遵循培训",
          "外部审计支持"
        ],
        [
          "内部审计",
          "公司风险管理",
          "人力资源管理",
          "劳工法律咨询"
        ]
      ]
      return {
        images: [show1, show2],
        screenHeight: window.innerHeight,
        currentDate: new Date(),
        visaMsgLst: visaMsgs,
        accountMsgLst: accountMsgs,
        visasub:[visasub1,visasub2, visasub3]
      }
    },
    mounted: function () {
      console.log(this.screenHeight);
      let h = this.screenHeight;
      document.getElementById('show-img').style.height = h + "px";//页面初始化
      window.onresize = () => {
        return (() => {
          this.screenHeight = window.innerHeight;
        })()
      };
    },
    methods: {
      goto: function (item) {
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

  .mybox-text:hover {
    color: #4c4c4c;
  // text-shadow: 0 px 0 px red;
    font-weight: bold;
  }
</style>
