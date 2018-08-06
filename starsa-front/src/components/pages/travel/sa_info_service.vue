<template>
      <!-- all -->
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 10px auto;">
      <div
        style="text-align: left; margin:10px 20px;line-height: 36px; font-size:18px; border: 0px solid #f00">
        <p class="info_content">{{ $t('travel.sa_info')[0] }}</p>
        <img :src="kruger_wild2" style="height: 100%; width: 100%;"/>
        <p class="info_content" v-for="item in $t('travel.sa_info').slice(1, 4)">{{ item }}</p>
      </div>
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
  import travel_contact from "@/assets/images/travel-contact3.jpg"
  import travel_banner from "@/assets/images/travel-banner.jpg"

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
        "更多资料"
      ]
      let download_title_en = [
        "MORE INFO"
      ]

      let download_content = [
        ""
      ]

      let sa_info = [
        "南非共和国（英语：The Republic of South Africa），简称南非。地处南半球，有“彩虹之国”之美誉，位于非洲大陆的最南端，陆地面积为1219090平方公里南非位于非洲大陆最南部，其纬度自南纬22°至35°，经度从东经17°至33°。北邻纳米比亚、博茨瓦纳、津巴布韦、莫桑比克和斯威士兰，中部环抱莱索托，使其成为最大的国中国。东、南、西三面为印度洋和大西洋所环抱。其西南端的好望角航线，历来是世界上最繁忙的海上通道之一，有“西方海上生命线”之称。",
        "南非是非洲的第一大经济体，也是金砖五国之一，国民拥有较高的生活水平，经济相比其他非洲国家相对稳定。南非财经、法律、通讯、能源、交通业较为发达，拥有完备的硬件基础设施和股票交易市场，黄金、钻石生产量均占世界首位。深井采矿等技术居于世界领先地位。在国际事务中南非已被确定为一个中等强国，并保持显著的地区影响力。",
        "素有“彩虹之国”美誉的南非，自然风光绮丽，动植物种类繁多。游历一国等于环游世界，是南非的最佳写照。南非拥有富饶而多元化的文化特色、野生动物、完整的都市乡村规划、一流的道路建设、清新的空气、热情且好客的民族，加上比欧美国家更多的投资机会，吸引了成千上万的观光客和企业家前往一探究竟。",
        "南非的美是特别的，它，既有非洲的粗犷豪迈，同时又兼具欧洲的优雅旖旎。在原始与现代之间，与动物们来一场亲密的接触。而它五彩缤纷的色调，就如彩虹一般绚烂绮丽…… ",
      ]

      return {
//        sa_info: sa_info,
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
        msg_title: msg_title,
        msg_title_en: msg_title_en,
        msg_content: msg_content,
        msg_content1: msg_content1,
        msg_content2: msg_content2,
        msg_content3: msg_content3,
        msg_content4: msg_content4,
        dialog_content: msg_title,
        dialog_title: "奢华之旅",
        download_title: download_title,
        download_title_en: download_title_en,
//        pdf_kruger0: pdf_kruger0,
      }
    },
    mounted: function () {
      let num = sessionStorage.getItem("current_sub")
      let nd = document.querySelector("#subtitle_" + num);
      nd.className = "second_title_clicked"
      console.log("in reouter info : " + nd)
    },
    watch: {
    },
    methods: {
      switch_content: function (idx) {
        console.log("in swithc content")
        if (0 == idx) {
          this.$router.go({
                            name: "travel_router_info",
                            params: {}
                          })
        }
      }
    }
  }
</script>
<style scoped>

  .info_content {
    font-size: x-large;
    line-height: 46px;
  }

</style>
