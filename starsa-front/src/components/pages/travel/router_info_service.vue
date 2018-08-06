<template>
  <!-- all -->
  <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 10px auto;">
    <div
      style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
      <p class="to-center">{{ $t('travel.msg_title')[0] }}</p>
      <p class="to-center" style="color:#ccc">{{ msg_title_en[0] }}</p>
    </div>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
        <img :src="travel_contact" style="height: 300px; width: 640px; "/>
      </div>
      <div
        style="border: 0px solid #f00;font-size: x-large; line-height: 30px; padding: 0px; margin: 0px;">
        <div v-for="item in $t('travel.msg_content')">{{ item }}</div>
      </div>
    </el-row>
    <!---- kruger --->
    <div
      style="text-align: left; margin:20px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
      <p class="to-center">{{ $t('travel.msg_title')[1] }}</p>
      <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}</p>
    </div>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
        <img :src="travel_kruger2" style="height: 400px; width: 640px;"/>
      </div>
      <span class="msg_content">
          <div v-for="item in $t('travel.msg_content1')[0]">{{ item }}</div>
        </span>
    </el-row>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
        <img :src="travel_kruger" style="height: 400px; width: 640px;"/>
      </div>
      <span class="msg_content">
          <div v-for="item in $t('travel.msg_content1')[1]">{{ item }}</div>
        </span>
    </el-row>
    <!--- kruger wild --->
    <div
      style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
      <p class="to-center">{{ $t('travel.msg_title')[2] }}</p>
      <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}</p>
    </div>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
        <img :src="kruger_wild" style="height: 400px; width: 640px;"/>
      </div>
      <span class="msg_content">
          <div v-for="item in $t('travel.msg_content2')[0]">{{ item }}</div>
        </span>
    </el-row>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
        <img :src="kruger_wild1" style="height: 400px; width: 640px;"/>
      </div>
      <span class="msg_content">
          <div v-for="item in $t('travel.msg_content2')[1]">{{ item }}</div>
        </span>
    </el-row>
    <!---- cape town --->
    <div
      style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
      <p class="to-center">{{ $t('travel.msg_title')[3] }}</p>
      <p class="to-center" style="color:#ccc">{{ msg_title_en[3] }}</p>
    </div>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
        <img :src="capetown" style="height: 400px; width: 640px;"/>
      </div>
      <span class="msg_content">
          <div v-for="item in $t('travel.msg_content3')[0]">{{ item }}</div>
        </span>
    </el-row>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
        <img :src="capetown2" style="height: 400px; width: 640px;"/>
      </div>
      <span class="msg_content">
          <div v-for="item in $t('travel.msg_content3')[1]">{{ item }}</div>
        </span>
    </el-row>
    <!-- pdf download -->
    <div
      style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
      <p class="to-center">{{ $t('travel.download_title')[0] }}</p>
      <p class="to-center" style="color:#ccc">{{ download_title_en[0] }}</p>
    </div>
    <el-row
      style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
      <p/>
      <a
        href="/static/pdf/南非克鲁格奢华游_2018.pdf"
        target="_blank" style="font-size: x-large">南非克鲁格奢华游_2018.pdf</a>
      <p/>
      <a
        href="/static/pdf/南非私人订制克鲁格+开普敦_2018.pdf"
        target="_blank" style="font-size: x-large">南非私人订制克鲁格+开普敦_2018.pdf</a>
      <p/>
      <a
        href="/static/pdf/开普敦_2018.pdf"
        target="_blank" style="font-size: x-large">南非克鲁格奢华游_2018.pdf</a>
      <p></p>
      <a
        href="/static/pdf/南非狩猎之旅-新星国际(含部分报价).pdf"
        target="_blank" style="font-size: x-large">南非狩猎之旅-新星国际(含部分报价).pdf
      </a>
    </el-row>

  </div>
</template>
<script>
  import travel_kruger from "@/assets/images/travel-kruger.jpg"
  import travel_kruger2 from "@/assets/images/travel-kruger2.jpg"
  import kruger_wild from "@/assets/images/kruger-wild.jpg"
  import kruger_wild1 from "@/assets/images/kruger-wild1.jpg"
  import kruger_wild2 from "@/assets/images/kruger-wild2.jpg"
  import capetown from "@/assets/images/capetown.jpg"
  import capetown1 from "@/assets/images/capetown1.jpg"
  import capetown2 from "@/assets/images/capetown2.jpg"
  import grape from "@/assets/images/grape.jpg"
  import whale from "@/assets/images/whale.jpg"
  import suncity from "@/assets/images/suncity.jpg"
  import garden_path from "@/assets/images/garden-path.jpg"
  import travel_hotel from "@/assets/images/travel-hotel2.jpg"
  import travel_contact from "@/assets/images/travel-contact.jpg"
  import travel_banner from "@/assets/images/travel-banner.jpg"
  import Hub from "@/api/hub.js"
  import poster1 from "@/assets/images/poster1.jpg"
  import poster2 from "@/assets/images/poster2.jpg"
  import poster3 from "@/assets/images/poster3.jpg"


  export default {
    components: {},
    data() {
      let msg_title = [
        "彩虹之国多种路线私人定制奢华猎旅",
        "克鲁格国家公园野奢私人定制之旅",
        "野生动物徒步探险私人定制之旅",
        "开普敦奢华私人定制之旅",
        "南非简介",
        "机票订购业务"
      ]
      let msg_title_en = [
        "X-STAR TRAVEL SOLUTIONS",
        "X-STAR TRAVEL SOLUTIONS",
        "X-STAR TRAVEL SOLUTIONS",
        "X-STAR TRAVEL SOLUTIONS",
        "X-STAR TRAVEL SOLUTIONS",
      ]

      let msg_content = [
        "新星国际将为您私人定制多套豪华旅游路线,每天都精彩不同",
        "从开普敦(Cape Town)到克鲁格野生国家公园(Kruger National Park)",
        "从两洋交汇好望角到狂野的野生丛林",
        "从企鹅岛到花园大道",
        "从葡萄酒庄到太阳城赌场",
        "让您尽享受非洲的狂野与奢华"
      ]

      let msg_content1 = [
        [
          "尽管这些酒店位于远离现代城市的苍茫原野",
          "但是却融合了精品酒店的时尚与奢华",
          "提供世界一流的精品料理"
        ],
        [
          "入住克鲁格公园内私人动物保护区,五星豪华酒店。",
          "这里你可以选择河边惬意的非洲风情豪华套房",
          "酒店游泳池边乱入的动物,人与自然完美和谐."
        ],
      ]

      let msg_content2 = [
        [
          "踏着清晨的阳光",
          "我们将驱车带领你领略克鲁格清晨的景色",
          "享受非洲大地上追逐野生动物的乐趣"
        ],
        [
          "对于爱探险和刺激的你",
          "我们准备了具有20年以上经验的专业向导带队",
          "体验一把在野生动物园灌木丛林徒步探险之旅"
        ],
      ]

      let msg_content3 = [
        [
          "开普敦是南非立法首都,坐落在桌山脚下的大西洋边",
          "开普敦是南非历史最久远的城市",
          "美丽的桌山山脉环绕着它",
          "这里是当之无愧的世界最美丽城市之一"
        ],
        [
          "桌山游览,桌山被开普敦当地人称之为上帝的餐桌",
          "登桌山顶俯视整个开普敦风光及大西洋风景",
          "从海拔350米高信号山乘坐滑翔伞,体验独特飞行",
          "在水门码头乘坐游轮,享受美丽的日落和游轮上的晚餐"
        ]
      ]

      let msg_content4 = [
        [
          "太阳城是“世界小姐”选美大赛的场地",
          "有“南非拉斯维加斯”之称",
          "城内的皇宫饭店(The Palace Hotel)",
          "以金碧辉煌和尊贵舒适著称",
          "名列世界十大饭店之列"
        ],
        [
          "从莫塞尔港 (Mossel Bay)到斯托姆河(Storms River)连续255公里的一级海滨公路被称为花园大道",
          "花园大道与湖泊、山脉、黄金海滩、悬崖峭壁和茂密原始森林丛生的海岸线平行",
          "沿途可见清澈的河流自欧坦尼科与齐齐卡马山脉流入蔚蓝的大海"
        ],
      ]

      let download_title = [
        "更多资料",
        "更多海报"
      ]
      let download_title_en = [
        "MORE INFO",
        "MORE POSTER INFO"
      ]

      let download_content = [
        ""
      ]

      return {
        travel_kruger: travel_kruger,
        travel_kruger2: travel_kruger2,
        kruger_wild: kruger_wild,
        kruger_wild1: kruger_wild1,
        kruger_wild2: kruger_wild2,
        capetown: capetown,
        capetown1: capetown1,
        capetown2: capetown2,
        grape: grape,
        suncity: suncity,
        whale: whale,
        garden_path: garden_path,
        travel_contact: travel_contact,
        travel_hotel: travel_hotel,
        travel_banner: travel_banner,
        screenHeight: window.innerHeight,
//        msg_title: msg_title,
        msg_title_en: msg_title_en,
//        msg_content: msg_content,
//        msg_content1: msg_content1,
//        msg_content2: msg_content2,
//        msg_content3: msg_content3,
        msg_content4: msg_content4,
        download_title: download_title,
        download_title_en: download_title_en,
        poster1: poster1,
        poster2: poster2,
        poster3: poster3,
      }
    },
    mounted: function () {
      let num = sessionStorage.getItem("current_sub")
      let nd = document.querySelector("#subtitle_" + num);
      nd.className = "second_title_clicked"
      console.log("in reouter info : " + nd)
//      Hub.$on("tclick", (tmsg) =>{
//        console.log("emit: " + tmsg)
//        let num = sessionStorage.getItem("current_sub")
//        let nd = document.querySelector("#subtitle_" + num);
//        nd.className = "second_title_clicked"
//      })
    },
    watch: {
      screenHeight: function (val) {
        this.screenHeight = val;
        let h = this.screenHeight;
//        document.getElementById('show-img').style.height = h + "px";//检测窗口的大小，并赋值
      }
    },
    methods: {
    },
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

  .msg_content {
    border: 0px solid #f00;
    font-size: x-large;
    line-height: 36px;
    overflow: hidden
  }
</style>
