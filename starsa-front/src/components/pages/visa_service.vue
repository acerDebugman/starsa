<template>
  <div class="block">
    <div id="show-img">
      <img :src="images[0]" style="height: 100%;width: 100%;"/>
      <div class="my_dialog">
        <div class="my_dialog_title">{{ dialog_title }}</div>
        <div class="my_dialog_content" v-for="msg_item in dialog_content ">{{ msg_item }}
        </div>
      </div>
    </div>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 30px auto;">
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[0] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[0] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="betty_ch" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ msg_visa_doc[0] }}</h1>
          <h1>{{ msg_visa_doc[1] }}</h1>
          <h1>{{ msg_visa_doc[2] }}</h1>
          <h1>{{ msg_visa_doc[3] }}</h1>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="betty_en" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ msg_visa_apply[0] }}</h1>
          <h1>{{ msg_visa_apply[1] }}</h1>
          <h1>{{ msg_visa_apply[2] }}</h1>
          <h1>{{ msg_visa_apply[3] }}</h1>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="betty_ch" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ boundary_port[0] }}</h1>
          <h1>{{ boundary_port[1] }}</h1>
          <h1>{{ boundary_port[2] }}</h1>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[3] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[3] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="betty_en" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ beijing_office[0] }}</h1>
          <h4>{{ beijing_office[1] }}</h4>
          <h1>{{ beijing_office[2] }}</h1>
          <h4>{{ beijing_office[3] }}</h4>
          <h1>{{ beijing_office[4] }}</h1>
          <h4>{{ beijing_office[5] }}</h4>
          <h4>{{ beijing_office[6] }}</h4>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[4] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[4] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="betty_ch" style="height: auto; width: auto; float: left; margin-right: 10px"/>
        <span>
          <h3>{{ one_belt_one_road[0] }}</h3>
          <h3>{{ one_belt_one_road[1] }}</h3>
        </span>
      </el-row>
      <!-- pdf download -->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ download_title[0] }}</p>
        <p class="to-center" style="color:#ccc">{{ download_title_en[0] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <p/>
        <a
          href="/static/pdf/Checklist-INTRA-COMPANY-TRANSFER-WORK-内地调动签证所需资料.pdf"
          target="_blank" style="font-size: x-large">Checklist-INTRA-COMPANY-TRANSFER-WORK-内地调动签证所需资料.pdf</a>
        <p/>
        <a
          href="/static/pdf/Checklist-RELATIVES-VISA-陪伴签证所需资料.pdf"
          target="_blank" style="font-size: x-large">Checklist-RELATIVES-VISA-陪伴签证所需资料.pdf</a>
        <p/>
        <a
          href="/static/pdf/Revised-10-Year-BRICS-Business-Executive-Visa-updated金砖国家企业高管十年商务签证.pdf"
          target="_blank" style="font-size: x-large">Revised-10-Year-BRICS-Business-Executive-Visa-updated金砖国家企业高管十年商务签证.pdf</a>
        <p/>
        <a
          href="/static/pdf/Revised-A-PERIOD-EXCEEDING-THREE-MONTHS-updated3个月到三年的访问签证.pdf"
          target="_blank" style="font-size: x-large">Revised-A-PERIOD-EXCEEDING-THREE-MONTHS-updated3个月到三年的访问签证.pdf
        </a>
        <p/>
        <a
          href="/static/pdf/Revised-Business-Visitor-updated商务访问.pdf"
          target="_blank" style="font-size: x-large">Revised-Business-Visitor-updated商务访问.pdf
        </a>
        <p/>
        <a
          href="/static/pdf/Revised-Individual-Holiday-updated旅游访问签证.pdf"
          target="_blank" style="font-size: x-large">Revised-Individual-Holiday-updated旅游访问签证.pdf
        </a>
        <p/>
        <a
          href="/static/pdf/Revised-Visit-FamilyFriends-updated探亲和访友.pdf"
          target="_blank" style="font-size: x-large">Revised-Visit-FamilyFriends-updated探亲和访友.pdf
        </a>
      </el-row>
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ download_title[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ download_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <p/>
        <a
          href="http://www.vfsglobal.cn/SouthAfrica/China/chinese/index.html"
          target="_blank" style="font-size: x-large">北京南非签证中心</a>
        <p/>
      </el-row>
    </div>
  </div>
</template>
<script>
  import show1 from "@/assets/images/visa-banner.jpg"
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"

  export default {
    components: {},
    data() {
      let msg_title = ["签证资料服务",
                       "签证类服务",
                       "进出关问题",
                       "北京办事处服务",
                       "一带一路商务洽谈",
                       "相关签证申请文档"
      ]

      let msg_title_en = ["X-STAR VISA SOLUTIONS",
                          "X-STAR VISA SOLUTIONS",
                          "X-STAR VISA SOLUTIONS",
                          "X-STAR VISA SOLUTIONS",
                          "X-STAR VISA SOLUTIONS"]

      let msg_visa_doc = ["南非注册结婚以及南非相关公证认证",
                          "南非小孩出生证明以及相关公证认证",
                          "南非无犯罪等",
                          "南非未入籍以及退籍申请"]

      let msg_visa_apply = ["南非永久居留PR申请，ID 申请",
                            "学生签证,陪伴签证,退休签证,商务考察签证延期",
                            "贴纸转贴",
                            "南非申请美国10年多次往返签证"]

      let boundary_port = ["进出关南非逾期滞留",
                           "进出关口签证类任何疑难杂症",
                           "为客户进出关南非保驾护航"]

      let beijing_office = [
        "南非短期签证：",
        "旅游,探亲,访友,商务考察,金砖五国10年高管签证等",
        "南非长期签证：",
        "4年内部调动签,陪伴签,学生签证,退休签证,集团签证,投资移民签证等",
        "非洲周边其他国家签证：",
        "纳米比亚,马拉维,博兹瓦纳,埃塞俄比亚,莱索托,刚果金,刚果布,加纳,赞比亚,",
        "津巴布韦等",
      ]

      let one_belt_one_road = [
        ""
      ]

      let download_title = [
        "相关签证文档",
        "相关网站链接"
      ]

      let download_title_en = [
        "MORE VISA DOCUMENTS",
        "RELATIVE LINKS"
      ]

      return {
        images: [show1],
        screenHeight: window.innerHeight,
        betty_en: betty_en,
        betty_ch: betty_ch,
        msg_visa_doc: msg_visa_doc,
        msg_visa_apply: msg_visa_apply,
        msg_title: msg_title,
        msg_title_en: msg_title_en,
        boundary_port: boundary_port,
        beijing_office: beijing_office,
        one_belt_one_road: one_belt_one_road,
        dialog_content: msg_title,
        dialog_title: "签证类服务",
        download_title: download_title,
        download_title_en: download_title_en
      }
    },
    mounted: function () {
//      console.log(this.screenHeight);
      let h = this.screenHeight / 7 * 5;
      document.getElementById('show-img').style.height = h + "px";//页面初始化
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
</style>
