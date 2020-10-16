<template>

  <div class="block">
    <div id="show-img">
      <img :src="about_us" style="height: 100%;width: 100%;"/>
      <div class="my_dialog">
        <div class="my_dialog_title" style="font-size: x-large; line-height: 20px !important;">{{ dialog_title }}</div>
        <div class="my_dialog_content" style="font-size: medium; line-height: 22px !important; margin-top: 0"
             v-for="msg_item in $t('') ">{{ msg_item }}
        </div>
      </div>
    </div>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 30px auto;">
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t('about.msg_title')[0] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[0] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="corp_history" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00;">
          <h3 style="line-height: 30px;">{{ $t('about.company_info')[0] }}</h3>
        </div>
      </el-row>

      <!----  --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t('about.msg_title')[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="betty_img" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00; padding: 0px; margin: 0px;">
          <h1 style="font-size: xx-large;">{{ $t("about.personal_name")[0] }}</h1>
          <h2>{{ personal_name_en[0] }}</h2>
          <div style="font-size: x-large; line-height: 36px">{{ $t('about.personal_info')[0] }}</div>
        </div>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t('about.msg_title')[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="sam_img" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00; padding: 0px; margin: 0px;">
          <h1 style="font-size: xx-large">{{ $t("about.personal_name")[1] }}</h1>
          <h2>{{ personal_name_en[1] }}</h2>
          <div style="font-size: x-large; line-height: 36px">{{ $t('about.personal_info')[1] }}</div>
        </div>
      </el-row>
      <!---- 专业团队  --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t('about.msg_title')[3] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[3] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="pro_team_img" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00; padding: 0px; margin: 0px;">
          <h1 style="font-size: xx-large">专业团队</h1>
          <div style="font-size: x-large; line-height: 36px">
            团队核心成员均毕业于国内外知名高校,专门从事做账报税业务,具有丰富的财务经验和商务洽谈经验.
            团队成员均来自南非本地高校和从事对接洽谈本地政府相关业务,专业处理各类本地政府相关业务问题和处理各类财务问题.
          </div>
        </div>
      </el-row>
      <!--- --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t('about.msg_title')[4] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[4] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;">
          <img :src="honour_wtt" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00;">
          <h1 style="line-height: 30px;">{{ $t("about.glory") }}</h1>
        </div>
      </el-row>

      <!--- PPT --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center" style="margin-top:80px">公司相关介绍文档</p>
        <p class="to-center" style="color:#ccc">Company Introduction</p>
      </div>
      <el-row style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="border: 0px solid #f00;">
          <a href="/static/pdf/新星国际ppt_v2.pdf"
             target="_blank" style="font-size: large">新星国际PPT介绍.pdf</a>
        </div>
      </el-row>

      <!--- 公司相关PPT --->
<!--      <div-->
<!--        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">-->
<!--        <p class="to-center"> 公司相关PPT </p>-->
<!--        <p class="to-center" style="color:#ccc">{{ download_title_en[1] }}</p>-->
<!--      </div>-->
<!--      <el-row-->
<!--        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">-->
<!--        <p/>-->
<!--        <a-->
<!--          href="/static/doc/中国申请关键技能工作签证，获签后可以直接在南非申请PR.docx"-->
<!--          target="_blank" style="font-size: x-large">中国申请关键技能工作签证，获签后可以直接在南非申请PR.docx</a>-->
<!--        <p/>-->
<!--      </el-row>-->
    </div>
  </div>
</template>
<script>
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"
  import corp_history from "@/assets/images/corp-history2.jpg"
  import betty_img from "@/assets/images/betty_img.jpg"
  import sam_ch from "@/assets/images/card-sam-ch.jpg"
  import sam_en from "@/assets/images/card-sam-en.jpg"
  import sam_img from "@/assets/images/sam_img.jpg"
  import pro_team_img from "@/assets/images/pro_team.jpg"
  // import about_us from "@/assets/images/about-us-banner.jpg"
  import about_us from "@/assets/images/about-us-office2.png"
  import honour_wtt from "@/assets/images/wangtingting_show.jpg"

  export default {
    components: {},
    data() {
      let msg_title = [
        "公司发展史",
        "签证商务部负责人介绍",
        "会计部负责人介绍",
        "获得荣耀",
      ]
      let msg_title_en = [
        "Company History",
        "Visa Service Manager",
        "Accounting Service Manager",
        "Professional Team",
        "Honour"
      ]
      let personal_name = [
        "王婷婷",
        "谢浩林",
      ]
      let personal_name_en = [
        "Betty",
        "Sam",
      ]
      let personal_info = [
        "毕业于北京交通大学，工商管理专业学士学位。在南非有8年的签证服务经验。专攻南非各类签证，" +
        "解决在南非的企业及个人签证的疑难杂症.",
        "南非注册税务师。南非注册商业会计师。中国会计资格证。南非税务协会会员。毕业于澳大利亚悉尼大学，" +
        "拥有会计硕士和金融硕士双学位。在南非有7年的财务工作经验。专门从事做账报税业务。" +
        "在加入我们公司之前一直在南非当地会计师事务所负责中国业务，熟悉中国客户的需求.目前在我们公司负责税务以及市场业务。"
      ]
      let company_info = [
        "公司介绍： " +
        "自2012年以来，公司致力于专业办理南非各类签证,机票订制,处理南非会计账目问题,定制南非个性豪华私人旅游,接洽中国到南非各类商务活动及会展，以及南非本地车辆、仓库、房屋出租。业务范围包括：各类签证处理,税收审计,财务报告,机票订制,私人旅游,商务洽谈,会议行程安排，安保服务、车辆、仓库、房屋出租。" +
        "车辆出租：" +
        "与南非多家专业租车公司签署合作协议，提供便宜、快捷的租车服务。根据您的用车需求，制定个性化用车解决方案，涵盖多种车型，满足不同需求。" +
        "仓库及房屋出租：" +
        "本公司有固定长期各类一手房源，提供南非全国境内仓库、办公室、公寓出租服务。能快速专业的寻找到各类低价位仓库、办公室、公寓。为您节省繁琐的看房时间及房屋中介手续，让您以最便捷的方法拿到便宜房源。" +
        "安保服务：" +
        "与南非本地多家专业安保公司签署代理协议，为当地华人公司提供各类安保服务。业务范围遍及南非全国，提供专业的安全保障，为在南华资企业保驾护航。" +
        "一带一路商务洽谈：" +
        "接待国内到南非各商务考察团，按客户要求策划举办相应会议及活动，并协助邀请中国驻南非使领馆人员以及南非国一定级别领导（含总统及副总统）出席参与。 "
      ]

      let dialog_content = [
        "新星国际 X-star International Pty Ltd",
        "公司地址: 26 ERNEST OPPENHEIMER STREET,VASCO DA GAMA HOUSE, BRUMA 2026",
        "公司微信： 1060151666(签证服务)  saminxhl(会计服务)",
        "南非总经理联系电话: 0782763881  Betty 王",
        "会计师联系电话: 0846428984  Sam 谢",
        "旅游经理联系电话：+27729365435 张赟(Amelie Zhang) xstar-amelie@hotmail.com",
        "南非Office电话: 011 0396355",
      ]

      return {
        about_us: about_us,
//        msg_title: msg_title,
        msg_title_en: msg_title_en,
//        personal_info: personal_info,
        screenHeight: window.innerHeight,
//        personal_name: personal_name,
        personal_name_en: personal_name_en,
//        company_info: company_info,
        betty_ch: betty_ch,
        betty_en: betty_en,
        corp_history:corp_history,
        betty_img: betty_img,
        honour_wtt: honour_wtt,
        sam_ch: sam_ch,
        sam_en: sam_en,
        sam_img: sam_img,
        pro_team_img: pro_team_img,
//        dialog_content: dialog_content,
//        dialog_title: "关于我们"
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
</style>
