import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 哪些地方需要切换，以及各个语言的版本
// const messages = {
//   zh: {
//     message: {
//       text: '免费获取 SGC',
//       arr: ["a","b"]
//     }
//   },
//   en: {
//     message: {
//       text: 'Get Free SGC',
//       arr: ["a","b"]
//     }
//   }
// }

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
// const messages = {
//   'zh-CN': require('./common/lang/zh'),   // 中文语言包
//   'en-US': require('./common/lang/en')    // 英文语言包
// }
// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
  'zh': require('./common/lang/zh'),   // 中文语言包
  'en': require('./common/lang/en')    // 英文语言包
}

// 最后 export default，这一步肯定要写的。
export default new VueI18n({
  locale: 'zh', // set locale 默认显示英文
  fallbackLocale: "zh",
  messages // set locale messages
})
