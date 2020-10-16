<template>
  <el-container>
    <el-header style="padding:0px; height: auto; position: absolute;z-index: 2">
      <el-menu :default-active="currentPath"
               class="el-menu-demo" mode="horizontal"
               background-color="transparent"
               router
               text-color="#fff"
               active-text-color="#f00"
               style="height:100%;align-content: center; min-width: 1200px"
               @select="handleSelect">
<!--        <el-menu-item index="/home_service">-->
        <el-menu-item index="/visa_service">
          <img :src="xstarlogo" style="position:relative; top:20px; height: auto; width: auto;"/>
        </el-menu-item>
        <el-menu-item index="/visa_service">
          <div class="mytitle">
            {{ $t('title.visa') }}
          </div>
          <!--
          <div class="mybottom-line"
               style="position:relative;top: 15px;width:40%; border-top: 1px solid #fff;"></div>
          -->
        </el-menu-item>
        <el-menu-item index="/accounting_service">
          <div class="mytitle">
            {{ $t('title.accounting') }}
          </div>
        </el-menu-item>
        <el-menu-item index="/value_add_service">
          <div class="mytitle">
            {{ $t("title.value_added") }}
          </div>
        </el-menu-item>
        <el-menu-item index="/travel_service">
          <div class="mytitle">
            {{ $t("title.travel") }}
          </div>
        </el-menu-item>
        <el-menu-item index="/about_us">
          <div class="mytitle">
            {{ $t("title.about_us") }}
          </div>
        </el-menu-item>

        <el-menu-item :index="currentPath"
                      style="padding:0px 40px 0px 0px;float:right;color: #fff;"
        >
          <div class="mytitle" @click="langToggle">
           English
          </div>
        </el-menu-item>
        <el-menu-item :index="currentPath"
                      style="padding:0px 3px 0px 3px;float: right;color: #fff;">
          <div class="mytitle">
            /
          </div>
        </el-menu-item>
        <el-menu-item :index="currentPath"
                      style="padding:0px 0px 0px 00px;float: right;color: #fff;">
          <div class="mytitle" @click="langToggle">
            中文
          </div>
        </el-menu-item>
        <el-menu-item index="/contact_us"
                      style="margin-right:100px;padding:0px 40px 0px 0px;float:right">
          <div class="mytitle">
            {{ $t('title.contact_us') }}
          </div>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main id="segment-main"
             style="overflow-y: auto;padding:0px;position: relative;top:0px;z-index: 1">
      <div>
        <transition name="fade"
                    mode="out-in">
          <router-view/>
        </transition>
      </div>
    </el-main>
    <el-footer style="">
      <div style="border-bottom: 1px solid #ccc;margin:0"></div>
      <div style="width:87%;margin:30px auto;">
        <div style="overflow: hidden;margin: 0 auto;padding: 0;height:400px">
          <div style="float:left;height:100%; border:0px solid #f00;width:25%">
            <p class="footer-title" style="position:relative;top:-20px">
              <img :src="xstarfooter" style="opacity:0.7;"/>
            </p>
            <p>
              <router-link to="home_service"
                           style="text-decoration:none; color:#ccc;color: inherit">
                新星国际 X-STARSA Internal Cooperation
              </router-link>
            </p>
          </div>
          <div style="float:left; height:90%; border:0px solid #f00; width:25%;">
            <p class="footer-title">{{ $t('footer.product.service') }}</p>
            <p>
              <router-link to="/visa_service" target="_blank"
                           style="text-decoration: none;color: inherit">
                {{ $t('footer.product.visa') }}
              </router-link>
            </p>
            <p>
              <router-link to="/accounting_service" target="_blank"
                           style="text-decoration: none;color: inherit">
                {{ $t('footer.product.accounting') }}
              </router-link>
            </p>
            <p>
              <router-link to="/value_add_service" target="_blank"
                           style="text-decoration: none;color: inherit">
                {{ $t('footer.product.value_added') }}
              </router-link>
            </p>
            <p>
              <router-link to="/travel_service" target="_blank"
                           style="text-decoration: none;color: inherit">
                {{ $t('footer.product.travel') }}
              </router-link>
            </p>
          </div>
          <div style="float: left; height:90%; border:0px solid #f00; width:50%;">
            <p class="footer-title">{{ $t('footer.about_us.about_us') }}</p>
            <p>
              <router-link to="/about_us" target="_blank"
                           style="text-decoration: none;color: inherit">
                {{ $t('footer.about_us.company') }}
              </router-link>
            </p>
            <p>
              <router-link to="/about_us" target="_blank"
                           style="text-decoration: none;color: inherit">
                {{ $t('footer.about_us.team') }}
              </router-link>
            </p>
            <!-- <a target="_blank" href="http://weibo.com/miaozhensystems" class="sina1">joe</a> -->
          </div>
        </div>
        <div style="border-bottom: 1px solid #808080;margin:0"></div>
        <div style="padding-top: 10px">
          <strong>Copyright</strong>
          © 2017 X-StarSA Systems. All Rights Reserved. 京公网安备 京ICP备17041274号-2
        </div>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
  import xstarlogo from "@/assets/images/transparent-logo.png"
  import xstarfooter from "@/assets/images/footer.png"

  export default  {
    name: "main",
    components: {},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        xstarlogo: xstarlogo,
        xstarfooter: xstarfooter,
        currentPath: "/home_service"
      }
    },
    mounted: function () {
//      console.log(window.innerHeight);
      console.log("in main: ", this.$i18n.locale)
    },
    methods: {
      handleSelect(key, keyPath) {
//        console.log(key, keyPath);
        this.currentPath = key
      },
      langToggle(obj) {
        console.log("langToggle: ", this.$i18n.locale)
//        console.log("content: ", this.$i18n.messages.zh.message.text, this.$i18n)

        if (this.$i18n.locale === 'en') {
          this.$i18n.locale = 'zh'
        } else {
          this.$i18n.locale = 'en'
        }
      }
    },
    watch: {}
  }
</script>
<style>
  .el-header {
    background-color: transparent;
    width: 100%;
    color: #333;
    text-align: center;
  }

  .el-footer {
    background-color: #262626;
    color: #808080;
    text-align: center;
    line-height: 20px;
    padding: 0;
    height: auto !important;
  }

  .el-main {
    background-color: transparent;
    color: #333;
    text-align: center;
    line-height: 160px;
    overflow: hidden;
    min-height: 200px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu-item, .el-submenu__title {
    padding: 0 30px
  }

  .el-menu--horizontal .el-menu-item:hover {
    background-color: transparent !important;
    color: #f00 !important;
  }

  .sina1 {
    width: 34px;
    height: 27px;
    background: url('../../assets/images/img15.png') no-repeat;
  }

  .footer-title {
    font-size: 24px;
    color: #ccc;
  }

  .mybottom-line:hover {
    border-top: 1px solid #f00;
  }

  .mytitle {
    position: relative;
    top: 20px;
  }

  .my_dialog {
    position: absolute;
    z-index: 3;
    font-weight: bold;
    text-align: left;
    color: #ffffff;
    border: 0px solid #f00;
    top: 200px;
    left: 80px;
    width: 700px;
    height: 300px;
    line-height: 30px !important;
    opacity: 1 !important;
    overflow: hidden !important;
  }

  .my_dialog_title {
    line-height: 40px !important;
    font-weight: 900;
    font-size: xx-large;
    margin-bottom: 20px;
  }

  .my_dialog_content {
    line-height: 30px !important;
    font-size: x-large;
  }
</style>
