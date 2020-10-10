<template>
  <div class="block">
    <div id="show-img">
      <img :src="images[0]" style="height: 100%;width: 100%;"/>
      <div class="my_dialog">
        <div class="my_dialog_title">{{ $t("visa.dialog_title") }}</div>
        <div class="my_dialog_content" v-for="msg_item in $t('visa.msg_title') ">{{ msg_item }}
        </div>
      </div>
    </div>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 30px auto;">
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.msg_title")[0] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[0] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="betty_ch" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ $t("visa.msg_visa_doc")[0] }}</h1>
          <h1>{{ $t("visa.msg_visa_doc")[1] }}</h1>
          <h1>{{ $t("visa.msg_visa_doc")[2] }}</h1>
          <h1>{{ $t("visa.msg_visa_doc")[3] }}</h1>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.msg_title")[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="visa_service_apply_img" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ $t("visa.msg_visa_apply")[0] }}</h1>
          <h1>{{ $t("visa.msg_visa_apply")[1] }}</h1>
          <h1>{{ $t("visa.msg_visa_apply")[2] }}</h1>
          <h1>{{ $t("visa.msg_visa_apply")[3] }}</h1>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.msg_title")[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="visa_beijing_office_img" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ $t("visa.beijing_office")[0] }}</h1>
          <h4>{{ $t("visa.beijing_office")[1] }}</h4>
          <h1>{{ $t("visa.beijing_office")[2] }}</h1>
          <h4>{{ $t("visa.beijing_office")[3] }}</h4>
          <h1>{{ $t("visa.beijing_office")[4] }}</h1>
          <h4>{{ $t("visa.beijing_office")[5] }}</h4>
          <h4>{{ $t("visa.beijing_office")[6] }}</h4>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.msg_title")[3] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[3] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="cargo" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1>{{ $t("visa.boundary_port")[0] }}</h1>
          <h1>{{ $t("visa.boundary_port")[1] }}</h1>
          <h1>{{ $t("visa.boundary_port")[2] }}</h1>
        </div>
      </el-row>
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.msg_title")[4] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[4] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="onebelt" style="height: auto; width: auto; float: left; margin-right: 10px"/>
        <span>
          <h1>{{ $t("visa.one_belt_one_road")[0] }}</h1>
          <h1>{{ $t("visa.one_belt_one_road")[1] }}</h1>
          <h1>{{ $t("visa.one_belt_one_road")[2] }}</h1>
        </span>
      </el-row>
      <!-- healhty -->
      <div
        style="text-align: left; margin:30px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.health_doc_title")[0] }}</p>
        <p class="to-center" style="color:#ccc">{{ $t("visa.health_doc_title")[1] }}
        </p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="health_red" style="height: auto; width: auto; float: left; margin-right: 10px"/>
        <img :src="health_yellow" style="height: auto; width: auto; float: left; margin-right: 10px"/>
        <span>
          <h3>{{ $t("visa.health_doc_content")[0] }}</h3>
          <h3>{{ $t("visa.health_doc_content")[1] }}</h3>
          <h3>{{ $t("visa.health_doc_content")[2] }}</h3>
          <h3>{{ $t("visa.health_doc_content")[3] }}</h3>
        </span>
      </el-row>
      <!-- pdf download -->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.download_title")[0] }}</p>
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
        <p class="to-center">{{ $t("visa.download_title")[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ download_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <p/>
        <a
          href="/static/doc/中国申请关键技能工作签证，获签后可以直接在南非申请PR.docx"
          target="_blank" style="font-size: x-large">中国申请关键技能工作签证，获签后可以直接在南非申请PR.docx</a>
        <p/>
        <a
          href="/static/doc/关键技能工作签证如何在南非申请PR.docx"
          target="_blank" style="font-size: x-large">关键技能工作签证如何在南非申请PR.docx</a>
        <p/>
        <a
          href="/static/doc/中国申请南非退休签证所需材料清单和注意事项.docx"
          target="_blank" style="font-size: x-large">中国申请南非退休签证所需材料清单和注意事项.docx</a>
        <p/>
        <a
          href="/static/doc/中国申请四年内部调动签证.docx"
          target="_blank" style="font-size: x-large">中国申请四年内部调动签证.docx</a>
        <p/>
        <a
          href="/static/doc/上海四年内调.docx"
          target="_blank" style="font-size: x-large">上海四年内调.docx</a>
        <p/>
        <a
          href="/static/doc/南非驻中国使领馆严查签证资料.docx"
          target="_blank" style="font-size: x-large">南非驻中国使领馆严查签证资料.docx</a>
        <p/>
        <a
          href="/static/doc/南非驻中国使领馆要给造假文件的签证中介“上一课”.docx"
          target="_blank" style="font-size: x-large">南非驻中国使领馆要给造假文件的签证中介“上一课”.docx</a>
        <p/>
        <a
          href="/static/doc/申请南非ID所需资料以及注意事项.docx"
          target="_blank" style="font-size: x-large">申请南非ID所需资料以及注意事项.docx</a>
        <p/>
        <a
          href="/static/doc/受此次疫情影响，南非移民总局对于华人签证做出临时调整和让步.docx"
          target="_blank" style="font-size: x-large">受此次疫情影响，南非移民总局对于华人签证做出临时调整和让步.docx</a>
        <p/>
      </el-row>

      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("visa.download_title")[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ download_title_en[2] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <p/>
        <a
          href="http://www.vfsglobal.cn/SouthAfrica/China/chinese/index.html"
          target="_blank" style="font-size: x-large">北京南非签证中心</a>
      </el-row>
    </div>
  </div>
</template>
<script>
  import show1 from "@/assets/images/visa-banner2.png"
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"
  import health_red from "@/assets/images/visa_red3.png"
  import health_yellow from "@/assets/images/visa_yellow3.png"
  import onebelt from "@/assets/images/onebelt.jpg"
  import cargo from "@/assets/images/cargo.jpg"
  import visa_service_apply from "@/assets/images/visa_service_apply.jpg"
  import visa_beijing_office from "@/assets/images/visa_beijing_office.jpg"

  export default {
    components: {},
    data() {
      let msg_title = [
        "签证资料服务",
        "签证类服务",
        "北京办事处服务",
        "进出关问题",
        "一带一路商务洽谈",
        "相关签证申请文档",
      ]

      let msg_title_en = [
        "X-STAR VISA SOLUTIONS",
        "X-STAR VISA SOLUTIONS",
        "X-STAR VISA SOLUTIONS",
        "X-STAR VISA SOLUTIONS",
        "X-STAR VISA SOLUTIONS"
      ]

      let msg_visa_doc = [
        "南非注册结婚以及南非相关公证认证",
        "南非小孩出生证明以及相关公证认证",
        "南非无犯罪等",
        "南非未入籍以及退籍申请"
      ]

      let msg_visa_apply = [
        "南非永久居留PR申请，ID 申请",
        "学生签证,陪伴签证,退休签证,商务考察签证延期",
        "贴纸转贴",
        "南非申请美国10年多次往返签证"
      ]

      let boundary_port = [
        "进出关南非逾期滞留",
        "进出关口签证类任何疑难杂症",
        "为客户进出关南非保驾护航"
      ]

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
        "接待国内到南非各商务考察团",
        "按客户要求策划举办相应会议及活动",
        "利用本司资源连结各重量级嘉宾"
      ]

      let download_title = [
        "相关签证文档",
        "2020年相关签证文档",
        "相关网站链接"
      ]

      let download_title_en = [
        "MORE VISA DOCUMENTS",
        "RELATIVE LINKS",
        "RELATIVE VISA INFO IN 2020"
      ]

      let health_doc_title = [
        "签证健康相关文件",
        "VISA HEALTH RELATIVE DOCS"
      ]

      let health_doc_content = [
          "办理非洲家签证经常会碰到提供“红本”-“黄本”" ,
          "“红本”学名叫《国际旅行健康检查证明书》，封面为红色皮故称红本" ,
          "“黄本”学名叫《疫苗接种或预防措施国际证书》，封面为黄色皮故称黄本" ,
          "红本和黄本一般是在市一级的出入境检疫检验局下设的国际旅行卫生保健中心办理",
      ]

      return {
        images: [show1],
        screenHeight: window.innerHeight,
        betty_en: betty_en,
        betty_ch: betty_ch,
        health_yellow: health_yellow,
        health_red: health_red,
        onebelt: onebelt,
        cargo: cargo,
        visa_service_apply_img: visa_service_apply,
        visa_beijing_office_img: visa_beijing_office,
//        msg_visa_doc: msg_visa_doc,
//        msg_visa_apply: msg_visa_apply,
//        msg_title: msg_title,
        msg_title_en: msg_title_en,
//        boundary_port: boundary_port,
//        beijing_office: beijing_office,
//        one_belt_one_road: one_belt_one_road,
//        dialog_content: msg_title,
//        dialog_title: "签证类服务",
//         download_title: download_title,
        download_title_en: download_title_en,
//        health_doc_content: health_doc_content,
//        health_doc_title: health_doc_title
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
