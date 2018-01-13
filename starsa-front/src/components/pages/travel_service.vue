<template>

  <div class="block">
    <div id="show-img">
      <img :src="travel_banner" style="height: 100%;width: 100%;"/>
      <div class="my_dialog" style="width: 720px">
        <div class="my_dialog_title">{{ dialog_title }}</div>
        <div class="my_dialog_content" v-for="msg_item in dialog_content ">{{ msg_item }}
        </div>
      </div>
    </div>
    <!-- all -->
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 30px auto;">
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[0] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[0] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="travel_contact" style="height: 300px; width: 640px; "/>
        </div>
        <div
          style="border: 0px solid #f00;font-size: x-large; line-height: 30px; padding: 0px; margin: 0px;">
          <div v-for="item in msg_content">{{ item }}</div>
        </div>
      </el-row>
      <!---- kruger --->
      <div
        style="text-align: left; margin:20px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="travel_kruger2" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content1[1]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="travel_kruger" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content1[0]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="travel_hotel" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content1[2]">{{ item }}</div>
        </span>
      </el-row>
      <!--- kruger wild --->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="kruger_wild2" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content2[2]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="kruger_wild" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content2[0]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="kruger_wild1" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content2[1]">{{ item }}</div>
        </span>
      </el-row>
      <!---- cape town --->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[3] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[3] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="capetown" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content3[0]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="capetown1" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content3[1]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="capetown2" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content3[2]">{{ item }}</div>
        </span>
      </el-row>
      <!---- suncity --->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[4] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[4] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="suncity" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content4[0]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="garden_path" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content4[1]">{{ item }}</div>
        </span>
      </el-row>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="whale" style="height: 400px; width: 640px;"/>
        </div>
        <span class="msg_content">
          <div v-for="item in msg_content4[2]">{{ item }}</div>
        </span>
      </el-row>
    </div>
  </div>
</template>
<script>
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"
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

  export default {
    components: {},
    data() {
      let msg_title = [
        "彩虹之国多种路线私人定制奢华猎旅",
        "克鲁格国家公园野奢私人定制之旅",
        "野生动物徒步探险私人定制之旅",
        "开普敦奢华私人定制之旅",
        "太阳城,花园大道,开普敦观鲸之旅",
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
          "入住克鲁格公园内私人动物保护区,五星豪华酒店。这里你可以选择河边惬意的" +
          "非洲风情豪华套房, 酒店游泳池边乱入的动物,人与自然完美和谐."
        ],
        [
          "旅行世界中,南非奢华游猎酒店可谓独树一帜,自有自己独特的奢华套路。" +
          "尽管这些酒店位于远离现代城市的苍茫原野,但是却融合了精品酒店的时尚与奢华," +
          "提供私人化的嵌入式泳池和一流的精品料理。这些散落在非洲原始丛林里的酒店," +
          "值得被放进每个热爱独特风情的旅者愿望清单," +
          "每一个酒店就是一次独特的私人之旅。"
        ],
        [
          "也可以入住南非独有的树屋,抬头可仰望夜空的星星,低头则可见从里里埋伏的野生动物。" +
          "这些树屋源自六十年前,最初是摄影师的工作台," +
          "此后里面渐渐有了双人床、浴盆、热水瓶和晨衣等生活用品。" +
          "直到如今,酒店也只会给入住者分配驱虫剂、手电和对讲机,其它事情得由客人自理。" +
          "此处可谓是户外探险者最诱人之地。"
        ]
      ]

      let msg_content2 = [
        [
          "踏着清晨的阳光,我们将驱车带领你领略克鲁格清晨的景色,享受非洲大地上追逐野生动物的乐趣"
        ],
        [
          "对于爱探险和刺激的你,我们准备了具有20年以上经验的专业向导带队," +
          "体验一把在野生动物园灌木丛林徒步探险之旅。当然我们也有不徒步选项," +
          "你可以参加私人动物保护区里提供的特殊拍摄之旅,收获不一样的特殊纪念"
        ],
        [
          "在克鲁格国家公园内生息的野生动物,在种类和数量上都是世界最多。哺乳类137种、鱼类49种、" +
          "爬行类112种、鸟类超过439种,特别是鹿科的高角羚,数量超过145000头,在非洲数量最多。" +
          "其它还有野牛20000万头、斑马16000头、非洲象6000头、非洲狮1200头,豹、长颈鹿、犀牛、" +
          "鳄鱼、河马、鸵鸟等在这里也有栖息"
        ]
      ]

      let msg_content3 = [
        [
            "开普敦是南非立法首都,坐落在桌山脚下的大西洋边。欧洲殖民者就是从这里登录了非洲大陆。" +
            "开普敦是南非历史最久远的城市,美丽的桌山山脉环绕着它,来自大西洋的寒风无法影响它," +
            "所以这里的气候是全世界最舒适宜人的。世界各地水手和冒险家们给开普敦带了不同的文化传统." +
            "难得一见的野生动物在广阔的土地上奔跑,神奇的好望角述说着历史,企鹅岛和海豹岛带来了生" +
            "灵的惊喜,风光绮丽的花原大道串联着一段让人陶醉的美景,独特风情的非洲小镇里流淌着时光。" +
            "非洲独具魅力的风景就在开普敦,这里是当之无愧的世界最美丽城市之一。"
        ],
        [
            "入住开普敦海景酒店或半山海景别墅,在非洲大地上,收获意向不到的惊喜"
        ],
        [
            "酒店早餐后,前往新世界7大自然奇观之一,桌山游览,桌山被开普敦当地人称之为上帝的餐桌," +
            "海拔最高点1085米,登桌山顶俯视整个开普敦风光及大西洋风景(桌山游览需要视天气情况而定)," +
            "信号山参加滑翔伞,从海拔350米高信号山乘坐滑翔伞,体验独特飞行。(视天气情况而定)午餐后,开普敦水门码头游览。" +
            "下午在水门码头乘坐游轮,享受美丽的日落和游轮上的晚餐。"
        ]
      ]

      let msg_content4 = [
        [
           "太阳城是“世界小姐”选美大赛的场地,有“南非拉斯维加斯”之称。在南非,太阳城就是娱乐、美食、赌博、舒适、" +
           "浪漫加上惊奇的同义字,很少人能摆脱他的迷人魅力。尤其是太阳城内的失落城(LostCity)," +
           "是个耗资8亿3千万兰德所打造出来的娱乐城,有处令人屏息的人造森林," +
           "和动感十足的人工海浪游泳池,城内的皇宫饭店(The Palace Hotel),以金碧辉煌和尊贵舒适等特色," +
           "名列世界十大饭店之列。入住皇宫酒店,充分享受美好度假时光。"
        ],
        [
           "早餐后,如果还没享受够自由惬意的海滩漫步,或想再体验一次寻找天然野生淡菜的乐趣," +
           "我们可以给足您一个上午自由活动时间。如果您想增加行程紧密度,我们还可以选择参观海洋博物馆," +
           "由您决定。午餐后,将踏上著名的花园大道,驱车前往奈斯纳。" +
           "从莫塞尔港 (Mossel Bay)到斯托姆河(Storms River)连续255公里的一级海滨公路被称为花园大道," +
           "是南非著名的旅游景点。花园大道与湖泊、山脉、黄金海滩、悬崖峭壁和茂密原始森林丛生的海岸线平行," +
           "沿途可见清澈的河流自欧坦尼科与齐齐卡马山脉流入蔚蓝的大海。"
        ],
        [
           "晚上驱车离开开普敦市区,入住著名的温泉酒店,为后面一天的观鲸之旅做好准备。" +
           "赫曼努斯,因为每年6至10月份是南非南部小镇赫曼努斯Hermanus最佳观鲸季节,一年一次," +
           "是绝对不容错过的,而那里也被誉为全世界最佳观鲸点,也是世界唯一能听到鲸鱼声音的城镇。"
        ]
      ]

      return {
        betty_ch: betty_ch,
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
        msg_title: msg_title,
        msg_title_en: msg_title_en,
        msg_content: msg_content,
        msg_content1: msg_content1,
        msg_content2: msg_content2,
        msg_content3: msg_content3,
        msg_content4: msg_content4,
        dialog_content: msg_title,
        dialog_title: "奢华之旅"
      }
    },
    mounted: function () {
//      console.log(this.screenHeight);
      let h = this.screenHeight / 7 * 5;
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
        let h = this.screenHeight;
//        document.getElementById('show-img').style.height = h + "px";//检测窗口的大小，并赋值
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

  .msg_content {
    border: 0px solid #f00;
    font-size: x-large;
    line-height: 36px;
    overflow: hidden
  }
</style>
