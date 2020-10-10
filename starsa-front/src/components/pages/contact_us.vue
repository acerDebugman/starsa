<template>

  <div class="block">
    <div id="show-img">
      <img :src="about_us" style="height: 100%;width: 100%;"/>
      <div class="my_dialog">
        <div class="my_dialog_title" style="font-size: x-large; line-height: 20px !important;">{{ dialog_title }}</div>
        <div class="my_dialog_content" style="font-size: large; line-height: 22px !important; margin-top: 0"
             v-for="msg_item in $t('contact.dialog_content') ">{{ msg_item }}
        </div>
      </div>
    </div>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 30px auto;">
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">微信二维码</p>
        <p class="to-center" style="color:#ccc">Wechat QR code</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="wechat_betty" style="height: auto; width: auto; "/>
          <img :src="wechat_anderson" style="height: auto; width: auto; "/>
          <img :src="wechat_sam" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00;">
          <h3 style="line-height: 30px;"></h3>
        </div>
      </el-row>

      <!----  --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t('contact.msg_title')[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="betty_ch" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00; padding: 0px; margin: 0px;">
          <h1 style="font-size: xx-large;">{{ $t("contact.personal_name")[0] }}</h1>
          <h2>{{ personal_name_en[0] }}</h2>
          <div style="font-size: x-large; line-height: 36px">{{ $t('contact.personal_info')[0] }}</div>
        </div>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t('contact.msg_title')[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="sam_ch" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00; padding: 0px; margin: 0px;">
          <h1 style="font-size: xx-large">{{ $t("contact.personal_name")[1] }}</h1>
          <h2>{{ personal_name_en[1] }}</h2>
          <div style="font-size: x-large; line-height: 36px">{{ $t('contact.personal_info')[1] }}</div>
        </div>
      </el-row>
      <!--- --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">相关新闻</p>
        <p class="to-center" style="color:#ccc">Relative News</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="border: 0px solid #f00;">
          <a href="http://www.52hrtt.com/mobileview/info?id=D1601427855501&areaId=27&behaviorSource=6&hrttInfoFontSize=2&languageId=1&flag=1"
             target="_blank" style="font-size: large">在南非做老板 您必须要了解的VAT基本知识</a>
          <p/>
          <a href="http://www.52hrtt.com/mobileview/info?id=D1600993944208&areaId=27&behaviorSource=4&hrttInfoFontSize=2&languageId=1&flag=1"
             target="_blank" style="font-size: large">新星国际·重磅推出国内申请4年内部调动签证〖2020年升级版〗</a>
          <p />
          <a href="http://www.52hrtt.com/mobileview/info?id=D1601427803315&areaId=27&behaviorSource=6&hrttInfoFontSize=2&languageId=1&flag=1"
             target="_blank" style="font-size: large">申请亲属签证所需材料以及注意事项</a>
          <p />
          <a href="http://www.52hrtt.com/mobileview/info?id=D1551318764958&areaId=27&behaviorSource=4&languageId=1&from=singlemessage&isappinstalled=0&flag=1"
             target="_blank" style="font-size: large">中国申请5年特殊技能签证收签中</a>
          <p />
          <a href="http://www.52hrtt.com/mobileview/info?id=D1600318418894&areaId=27&languageId=1&behaviorSource=4&flag=1"
             target="_blank" style="font-size: large">新星国际亲情奉献手把手教你申请南非税号</a>
          <p />
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"
  import sam_ch from "@/assets/images/card-sam-ch.jpg"
  import sam_en from "@/assets/images/card-sam-en.jpg"

  import wechat_sam from "@/assets/images/wechat_sam2.png"
  import wechat_betty from "@/assets/images/wechat_betty2.png"
  import wechat_anderson from "@/assets/images/wechat_anderson2.png"

  import about_us from "@/assets/images/about-us-banner.jpg"
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
        honour_wtt: honour_wtt,
        sam_ch: sam_ch,
        sam_en: sam_en,
        wechat_sam: wechat_sam,
        wechat_betty: wechat_betty,
        wechat_anderson: wechat_anderson
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
