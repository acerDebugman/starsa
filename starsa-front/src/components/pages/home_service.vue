<template xmlns="http://www.w3.org/1999/html">

  <div class="block">
    <el-carousel id="show-img" height="100%">
      <el-carousel-item v-for="(item, index) in images" :key="item">
        <router-link :to="service_addr[index]" style="cursor:pointer">
          <img :src="item" style="height: 100%;width: 100%;"/>
          <div class="my_dialog">
            <div class="my_dialog_title">{{ dialog_title[index] }}</div>
            <div class="my_dialog_content" v-for="msg_item in dialog_content[index]">{{ msg_item
              }}
            </div>
          </div>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 40px auto;">
      <!-- visa -->
      <div
        style="text-align: left; margin-left:20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[0] }}</p>
        <p class="to-center" style="color:#ccc">
          <span>{{ msg_title_en[0] }}</span>
          <router-link to="/visa_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
            更多
          </router-link>
        </p>
      </div>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(obj, index) in visaMsgLst" :key="obj[index]"
                :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <router-link to="/visa_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
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
                  <el-button type="text" class="button" @click="goto('/visa_service')">更多
                  </el-button>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
      <!-- accounting -->
      <div
        style="text-align: left; margin-left:20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[1] }}</p>
        <p class="to-center" style="color:#ccc">
          <span>{{ msg_title_en[1] }}</span>
          <router-link to="/accounting_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
            更多
          </router-link>
        </p>
      </div>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(msg, index) in accountMsgLst" :key="msg[index]"
                :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <router-link to="/accounting_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
            <el-card :body-style="{ padding: '0px' }" style="height: 440px;">
              <div style="height: 300px;overflow-y: hidden;">
                <img :src="accounting_sub[index]" class="image">
              </div>
              <div class="mybox-text" style="padding: 14px;">
                <div style="">{{ msg[0] }}</div>
                <div style="">{{ msg[1] }}</div>
                <div style="">{{ msg[2] }}</div>
                <div style="">{{ msg[3] }}</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button" @click="goto('/accounting_service')">更多
                  </el-button>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
      <!-- value added-->
      <div
        style="text-align: left; margin-left:20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[2] }}</p>
        <p class="to-center" style="color:#ccc">
          <span>{{ msg_title_en[2] }}</span>
          <router-link to="/value_add_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
            更多
          </router-link>
        </p>
      </div>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(msg, index) in value_add_msgs " :key="msg[index]"
                :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <router-link to="/value_add_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
            <el-card :body-style="{ padding: '0px' }" style="height: 440px;">
              <div style="height: 300px;overflow-y: hidden;">
                <img :src="value_add[index]" class="image">
              </div>
              <div class="mybox-text" style="padding: 14px;">
                <div style="">{{ msg[0] }}</div>
                <div style="">{{ msg[1] }}</div>
                <div style="">{{ msg[2] }}</div>
                <div style="">{{ msg[3] }}</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button" @click="goto('/value_add_service')">更多
                  </el-button>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
      <!-- travel service -->
      <div
        style="text-align: left; margin-left:20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[3] }}</p>
        <p class="to-center" style="color:#ccc">
          <span>{{ msg_title_en[3] }}</span>
          <router-link to="/travel_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
            更多
          </router-link>
        </p>
      </div>
      <el-row style="margin:40px auto;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <el-col :span="6" v-for="(msg, index) in travel_msgs" :key="msg[index]"
                :offset="index > 0 ? 2 : 0"
                style="width: 30%;margin: 15px 1.6%;padding-bottom:60px;border-bottom: 1px solid #ccc;">
          <router-link to="/travel_service" target="_blank"
                       style="float:right;text-decoration: none;font-weight: bold;font-size: medium">
            <el-card :body-style="{ padding: '0px' }" style="height: 440px;">
              <div style="height: 300px;overflow-y: hidden;">
                <img :src="travel_imgs[index]" class="image">
              </div>
              <div class="mybox-text" style="padding: 14px;">
                <div style="">{{ msg[0] }}</div>
                <div style="">{{ msg[1] }}</div>
                <div style="">{{ msg[2] }}</div>
                <div style="">{{ msg[3] }}</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button" @click="goto('/value_add_service')">更多
                  </el-button>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import show1 from "@/assets/images/sa-flag.jpg"
  import show2 from "@/assets/images/cooperation.jpg"
  import show3 from "@/assets/images/value-add-show.jpg"
  import show4 from "@/assets/images/elephant-7-show.jpg"
  import visasub1 from "@/assets/images/visa-sub1.jpg"
  import visasub2 from "@/assets/images/visa-sub2.jpg"
  import visasub3 from "@/assets/images/visa-sub3.jpg"
  import accounting_sub1 from "@/assets/images/accounting-sub1.jpg"
  import accounting_sub2 from "@/assets/images/accounting-sub2.jpg"
  import accounting_sub3 from "@/assets/images/accounting-sub3.jpg"
  import value_add_sub1 from "@/assets/images/value-add-sub1.jpg"
  import value_add_sub2 from "@/assets/images/value-add-sub2.jpg"
  import value_add_sub3 from "@/assets/images/value-add-sub3.jpg"
  import travel_sub1 from "@/assets/images/travel-sub1.jpg"
  import travel_sub2 from "@/assets/images/travel-sub2.jpg"
  import travel_sub3 from "@/assets/images/travel-sub3.jpg"
  import {base_url} from "@/api/api_base.js"

  export default {
    components: {},
    data() {
      let msg_title_en = [
        "X-STAR VISA SOLUTIONS",
        "X-STAR ACCOUNTING SOLUTIONS",
        "X-STAR VALUE-ADD SOLUTIONS",
        "X-STAR TRAVEL SOLUTIONS",
      ]
      let msg_title = [
        "签证类服务",
        "会计类服务",
        "增值服务",
        "奢华之旅"
      ]

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

      let value_add_msgs = [
        [
          "公司充分利用在南非丰富的服务经验,",
          "人力资源和广阔的关系,我们以合理的成本,",
          "高质量和高速度的服务帮助客户完成南非跨境项目"
        ],
        [
          "我们的客户主要为在南非的中资企业.",
          "客户设计行业包括,建筑,矿业,旅游业,零售,高科技等",
          "竭诚为中国公司在南非投资经营提供服务"
        ],
        [
          "为客户在南非投资提供财务,税务,劳务咨询等筹划工作",
          "为客户在南非的子公司提供报表合并,记账等业务",
          "对在南非的中国公司提供Public Officer业务"
        ],
      ]

      let travel_msgs = [
        [
          "克鲁格私人定制之旅",
          "野奢酒店入住，享受自然",
          "超近距离观赏野生动物,难忘体验"
        ],
        [
          "开普敦私人定制旅行",
          "上帝的餐桌卓山之旅",
          "企业岛之旅,感受生命的奇迹"
        ],
        [
          "花园大道之旅",
          "太阳城豪赌之旅",
          "开普敦观鲸之旅"
        ],
      ]

      let service_addr = [
        "/visa_service",
        "/accounting_service",
        "/value_add_service",
        "/travel_service"
      ]

      let current_time = new Date().toLocaleDateString()

      let dialog_title = [
        "签证类服务",
        "会计类服务",
        "增值服务",
        "奢华猎旅"
      ]
      let dialog_content = [
        [
          "南非注册结婚以及南非外交部公证认证",
          "南非永久居留PR申请，ID 申请",
          "学生,陪伴,退休,商务考察等签证延期",
          "进出关南非有逾期,滞留问题解决",
        ], [
          "对市场进入战略和投资结构的策划",
          "跨境及南非的税务筹划,申报",
          "人力资源管理",
          "劳工法律咨询",
          "对员工和管理人员提供南非会计准则遵循培训",
        ], [
          "我们公司充分利用在南非丰富的服务经验,人力资源和广阔的关系," +
          "我们以合理的成本,高质量和高速度的服务帮助客户成功地完成了大量在南非跨境项目.",
          "我们的客户主要为在南非的中资企业.客户设计行业包括,建筑,矿业,旅游业,零售,高科技等"
        ],[
          "每一个人身体里都有一个非洲的原始与神秘",
          "只有非洲能告诉你,什么叫做真正的与自然为伍",
          "这里是南非,是最能释放你野性的地方",
          "今天,加入我们的彩虹之国私人定制之旅" ,
          "让我们一起开启南非特有的奢华猎旅",
          "以最独特的方式犒赏自己",
        ]
      ]
      return {
        images: [show1, show2, show3, show4],
        msg_title: msg_title,
        msg_title_en: msg_title_en,
        screenHeight: window.innerHeight,
        currentDate: current_time,
        visaMsgLst: visaMsgs,
        accountMsgLst: accountMsgs,
        value_add_msgs: value_add_msgs,
        travel_msgs: travel_msgs,
        visasub: [visasub1, visasub2, visasub3],
        accounting_sub: [accounting_sub1, accounting_sub2, accounting_sub3],
        value_add: [value_add_sub1, value_add_sub2, value_add_sub3],
        travel_imgs: [travel_sub1, travel_sub2, travel_sub3],
        service_addr: service_addr,
        dialog_title: dialog_title,
        dialog_content: dialog_content,
      }
    },
    mounted: function () {
//      console.log(this.screenHeight);
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
//        window.open("http://localhost:8080/#/visa_service")
        console.log("in goto: " + item)
//        window.open(base_url + "/#" + item)
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
  / / text-shadow: 0 px 0 px red;
    font-weight: bold;
  }


</style>
