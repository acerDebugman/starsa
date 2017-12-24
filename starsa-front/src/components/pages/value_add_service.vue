<template>

  <div class="block">
    <div id="show-img">
      <img :src="value_add_banner" style="height: 100%;width: 100%;"/>
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
        <div style="float: left; margin-right: 20px;height: 400px;border: 0px solid #00f;">
          <img :src="betty_ch" style="height: auto; width: auto; "/>
        </div>
        <div style="border: 0px solid #f00;font-weight: bold; padding: 0px; margin: 0px;">
          <div v-for="item in msg_value_add">{{ item }}</div>
        </div>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[1] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[1] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;height: 400px">
          <img :src="betty_en" style="height: auto; width: auto;"/>
        </div>
        <span style="border: 0px solid #f00;font-weight: bold">
          <div v-for="item in msg_value_add1">{{ item }}</div>
        </span>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[2] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[2] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;">
          <img :src="betty_ch" style="height: auto; width: auto;"/>
        </div>
        <span style="border: 0px solid #f00;font-weight: bold">
          <span v-for="item in msg_value_add2">{{ item }}</span>
        </span>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[3] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[3] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;">
          <img :src="betty_en" style="height: auto; width: auto;"/>
        </div>
        <span style="border: 0px solid #f00;font-weight: bold">
          <span v-for="item in msg_value_add3">{{ item }}</span>
        </span>
      </el-row>
      <!----  --->
      <div
        style="text-align: left; margin:40px 20px;line-height: 10px; font-size:18px; border: 0px solid #f00">
        <p class="to-center">{{ msg_title[4] }}</p>
        <p class="to-center" style="color:#ccc">{{ msg_title_en[4] }}</p>
      </div>
      <el-row
        style="margin:20px 0px 20px 20px;line-height: 20px;text-align: left;border: 0px solid #00f;">
        <div style="float: left; margin-right: 20px;border: 0px solid #00f;">
          <img :src="betty_ch" style="height: auto; width: auto;"/>
        </div>
        <span style="border: 0px solid #f00;font-weight: bold">
          <span v-for="item in msg_value_add4">{{ item }}</span>
        </span>
      </el-row>
    </div>
  </div>
</template>
<script>
  import betty_en from "@/assets/images/card-betty-en.jpg"
  import betty_ch from "@/assets/images/card-betty-ch.jpg"
  import value_add_banner from "@/assets/images/value-add-banner2.jpg"

  export default {
    components: {},
    data() {
      let msg_title = [
        "为客户在南非投资经营提供咨询服务",
        "为客户在南非投资提供财务,税务,劳务咨询,税务筹划等服务",
        "为客户在南非收购和投资提供财务,税务服务和税收筹划",
        "为客户在南非的子公司提供报表合并,提供用中国会计软件记账业务",
        "对在南非的中国公司提供Public Officer业务",
      ]
      let msg_title_en = [
        "X-STAR VALUE-ADDED SOLUTIONS",
        "X-STAR VALUE-ADDED SOLUTIONS",
        "X-STAR VALUE-ADDED SOLUTIONS",
        "X-STAR VALUE-ADDED SOLUTIONS",
        "X-STAR VALUE-ADDED SOLUTIONS",
      ]

      let msg_value_add = [
        "我们公司充分利用在南非丰富的服务经验、人力资源和广阔的关系，我们以合理的成本、" +
        "高质量和高速度的服务帮助客户成功地完成了大量在南非跨境项目。我们的客户主要为在南非的中资企业。" +
        "客户设计行业包括，建筑，矿业，旅游业，零售，高科技等。为了客户信息保密，以下是我们其中一些客户的简单介绍。" +
        "客户名字不会直接出现。"
      ]

      let msg_value_add1 = [
        "客户1. A是国内一家从事非金属矿物制品业、水泥制造业的上市公司。公司在南非投资修建水泥厂，" +
        "总投资为2.2亿美元。我们公司承接了A公司南非当地财务的全部业务。提供做账，报税，" +
        "人力资源管理，审计支持一条龙服务。由于我们公司全部员工为中国人，语言沟通没有任何障碍，" +
        "做到了与A公司的财务人员无缝对接。A公司总部需要的南非当地财务税务劳工信息，" +
        "我们都可以保证第一时间提供，并且利用我们的语言优势，对其中比较困惑，" +
        "难懂的地方进行中文解释。同时在A公司成立前期，我们公司对A进行了整体的税务筹划，" +
        "在不违反南非当地税法的前提下，尽可能满足了中国总部的税务总体规划的需求。在项目进行过程中，" +
        "A公司与南非税务局在有关税收方面出现了理解的差异，作为当地全权财务代表，" +
        "我们公司积极与税务局沟通，及时解决了问题。避免了南非税务局的进一步行动。" +
        "作为EPC项目，必然大量引入中国劳工和当地劳工。" +
        "其中必不可少的会有潜在的南非劳工法律纠纷等问题。劳工法律服务支持，作为我们公司的又一强项，" +
        "我们给A公司的项目提供相关劳工法律信息和个人所得税信息，做到防范未然。" +
        "目前没有出现任何涉及南非本地的劳工纠纷。",
        "客户2. B公司，国内上市公司。在南非承建大型基建项目。我们公司取得B公司在南非的全部财务业务。从每个月的做账，" +
        "报税，到年度审计。我们提供全面的支持。由于南非与中国财务制度的差异，我们还会与B公司财务进行每月对账业务，" +
        "尽可能减少因为会计制度而导致的记账差异，并且查明差异地方。以便满足总部报表合并的需要。",
      ]

      let msg_value_add2 = [
        "客户3. C集团，山东最大民营企业。开发南非东开普省污水项目。我们公司提供了财务和税务服务。" +
        "我们还为该公司的收购设计了税务效益最佳的投资结构，并协助该公司设立南非控股公司，合法减少南非所得税的税务负担。" +
        "我们继续为目标公司的后期整合和重组提供税收筹划。",
      ]

      let msg_value_add3 = [
        "客户4. D公司，国内照明行业龙头老大。我们公司给D公司的南非子公司提供全面的做账，税务，审计服务。同时，" +
        "D公司在国内进行IPO，按照国内证监会以及交易所的要求，财务报表要进行全面及时的合并。由于海外公司，" +
        "使用当地的会计软件进行记账，而且是按照海外当地的会计准则进行账务处理，这样导致国内总部合并报表十分麻烦。" +
        "由于我们公司的全部员工都有中国从业经验，所以我们公司也成为南非第一家推出，按照中国会计准则，" +
        "使用金蝶用友软件来对南非业务进行账务处理的公司。这样大大方便了国内总部报表合并。" +
        "同时南非子公司也不需要专门从国内调派基础财务做账人员。"
      ]

      let msg_value_add4 = [
        "根据南非法律规定，如果公司董事不是南非常驻居民，公司必须要委派一名Public Officer " +
        "以此代表公司来处理南非的相关税务问题。Public Officer将作为公司名义上的董事，承担相应的责任和义务。" +
        "同时法律对Public Officer有严格的要求。要有相关的业务背景，相关行业的注册会员等。" +
        "我们公司合伙人是在南非税务局注册的Public Officer，符合全部条件。我们Public Officer的客户为各大中资企业。"
      ]

      return {
        betty_ch: betty_ch,
        betty_en: betty_en,
        value_add_banner: value_add_banner,
        screenHeight: window.innerHeight,
        msg_title: msg_title,
        msg_title_en: msg_title_en,
        msg_value_add: msg_value_add,
        msg_value_add1: msg_value_add1,
        msg_value_add2: msg_value_add2,
        msg_value_add3: msg_value_add3,
        msg_value_add4: msg_value_add4,
        dialog_content: msg_title,
        dialog_title: "增值类服务"
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
</style>
