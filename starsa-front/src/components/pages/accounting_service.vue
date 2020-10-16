<template>
  <div class="block" style="overflow: hidden;">
    <div id="show-img">
      <img :src="accounting_banner" style="height: 100%;width: 100%;"/>
      <div class="my_dialog">
        <div class="my_dialog_title">{{ $t("accounting.dialog_title") }}</div>
        <div class="my_dialog_content" v-for="msg_item in $t('accounting.msg_title') ">{{ msg_item }}
        </div>
      </div>
    </div>
    <div style="overflow: auto;border:0px dotted #f00;width: 90%;margin: 30px auto;">
      <div
        style="text-align: left; margin:10px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("accounting.msg_title")[0] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[0] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="sam_ch" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1 v-for="item in $t('accounting.accounting_tax')">{{ item }}</h1>
        </div>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:20px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("accounting.msg_title")[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="account_audit_img" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1 v-for="item in $t('accounting.accounting_audit')">{{ item }}</h1>
        </div>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:20px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("accounting.msg_title")[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="account_report_img" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1 v-for="item in $t('accounting.accounting_report')">{{ item }}</h1>
        </div>
      </el-row>
      <!---  --->
      <div
        style="text-align: left; margin:20px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("accounting.msg_title")[3] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[3] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="account_secretary_img" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1 v-for="item in $t('accounting.accounting_secretary')">{{ item }}</h1>
        </div>
      </el-row>
      <!---  --->
      <div
        style="text-align: left; margin:20px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ $t("accounting.msg_title")[4] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[4] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <img :src="account_human_resource_img" style="height: auto; width: auto; float: left"/>
        <div style="float: left; margin-top: 1%;margin-left: 20px">
          <h1 v-for="item in $t('accounting.human_resource')">{{ item }}</h1>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
  import accounting_banner from "@/assets/images/accounting-banner2.jpg"
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"
  import sam_ch from "@/assets/images/card-sam-ch.jpg"
  import sam_en from "@/assets/images/card-sam-en.jpg"
  import account_audit_img from "@/assets/images/account_audit.jpg"
  import account_report_img from "@/assets/images/account_report.jpg"
  import account_secretary_img from "@/assets/images/account_secretary.jpg"
  import account_human_resource_img from "@/assets/images/account_human_resource.jpg"

  export default {
    components: {},
    data() {
      let msg_title_en = [
        "X-STAR ACCOUNTING SOLUTIONS",
        "X-STAR ACCOUNTING SOLUTIONS",
        "X-STAR ACCOUNTING SOLUTIONS",
        "X-STAR ACCOUNTING SOLUTIONS",
        "X-STAR ACCOUNTING SOLUTIONS",
      ]
      let msg_title = [
        "税收服务",
        "审计服务",
        "财务报告及会计服务",
        "公司秘书业务",
        "人力资源服务",
      ]
      let accounting_tax = [
        "对市场进入战略和投资结构的策划",
        "跨境及南非的税务筹划,申报",
        "兼并和收购有关的税务筹划",
        "税务知识培训",
        "转移定价",
        "企业相关的一切税收的筹划和申报",
        "个人所得税的筹划和申报",
      ]
      let accounting_audit = [
        "内部审计",
        "公司风险管理",
      ]

      let accounting_report = [
        "记账",
        "管理报告",
        "对员工和管理人员提供南非会计准则遵循培训",
        "依据国际公认会计准则以及南非准则编制财务报告",
        "外部审计支持"
      ]

      let accounting_secretary = [
        "公司成立",
        "公司年审",
        "公司注销",
        "董事，公司名字更改",
        "会议纪要",
      ]

      let human_resource = [
        "人力资源管理",
        "工资管理",
        "劳工法律咨询"
      ]

      return {
        accounting_banner: accounting_banner,
        screenHeight: window.innerHeight,
        betty_en: betty_en,
        betty_ch: betty_ch,
        sam_ch: sam_ch,
        sam_en: sam_en,
        account_audit_img: account_audit_img,
        account_report_img: account_report_img,
        account_secretary_img: account_secretary_img,
        account_human_resource_img: account_human_resource_img,

//        msg_title: msg_title,
        msg_title_en: msg_title_en,
//        accounting_tax: accounting_tax,
//        accounting_audit: accounting_audit,
//        accounting_report: accounting_report,
//        accounting_secretary: accounting_secretary,
//        human_resource: human_resource,
//        dialog_content: msg_title,
//        dialog_title: "会计类服务"
      }
    },
    mounted: function () {
//      console.log(this.screenHeight);
      let h = this.screenHeight / 7 * 5.5;
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
