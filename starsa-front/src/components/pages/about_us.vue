<template>

  <div class="block">
    <div id="show-img">
      <img :src="about_us" style="height: 100%;width: 100%;"/>
      <div class="my_dialog">
        <div class="my_dialog_title" style="font-size: x-large; line-height: 20px !important;">{{ dialog_title }}</div>
        <div class="my_dialog_content" style="font-size: large; line-height: 22px !important; margin-top: 0" v-for="msg_item in dialog_content ">{{ msg_item }}
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
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="betty_ch" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00;">
          <h1 style="line-height: 30px;">{{ company_info[0] }}</h1>
        </div>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="betty_ch" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00; padding: 0px; margin: 0px;">
          <h1 style="font-size: xx-large;">{{ personal_name[0] }}</h1>
          <h2>{{ personal_name_en[0] }}</h2>
          <div style="font-size: x-large; line-height: 36px">{{ personal_info[0] }}</div>
        </div>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="betty_ch" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00; padding: 0px; margin: 0px;">
          <h1 style="font-size: xx-large">{{ personal_name[1] }}</h1>
          <h2>{{ personal_name_en[1] }}</h2>
          <div style="font-size: x-large; line-height: 36px">{{ personal_info[1] }}</div>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"
  import about_us from "@/assets/images/about-us-banner.jpg"

  export default {
    components: {},
    data() {
      let msg_title = [
        "公司发展史",
        "签证商务部负责人介绍",
        "会计部负责人介绍",
      ]
      let msg_title_en = [
        "Company History",
        "Visa Service Manager",
        "Accounting Service Manager"
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
        "本公司成立于1999年，是一家专业安排各种会议和接待公务、商务团组的南非商务公司，系南非旅游协会SATSA的成员。" +
        "业务范围包括：在南非组织召开各类说明会、咨询会、商务对接会和座谈会等各类会议。" +
        "为来自亚洲各国的团组定制南非、津巴布韦、肯尼亚和埃及等国的行程，代订酒店，安排交通和导游服务。" +
        "协助团组办理商务签证和安排考察活动。 "
      ]

      let dialog_content = [
        "新星国际 X-star International Pty Ltd",
        "公司地址: 26 ERNEST OPPENHEIMER STREET,VASCO DA GAMA HOUSE, BRUMA 2026",
        "公司微信： 1060151666(签证服务)  saminxhl(会计服务)" ,
        "南非总经理联系电话: 0782763881  Betty 王",
        "会计师联系电话: 0846428984  Sam 谢",
        "旅游经理联系电话：+27729365435 张赟(Amelie Zhang) xstar-amelie@hotmail.com",
        "南非Office电话: 011 0396355",
      ]

      return {
        about_us: about_us,
        msg_title: msg_title,
        msg_title_en: msg_title_en,
        personal_info: personal_info,
        screenHeight: window.innerHeight,
        personal_name: personal_name,
        personal_name_en: personal_name_en,
        personal_info: personal_info,
        company_info: company_info,
        betty_ch: betty_ch,
        betty_en: betty_en,
        dialog_content: dialog_content,
        dialog_title: "关于我们"
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
