import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/layout/main'
import visa_service from '@/components/pages/visa_service.vue'
import home_service from '@/components/pages/home_service.vue'
import account_service from '@/components/pages/account_service.vue'
import value_add_service from '@/components/pages/value_add_service.vue'
import about_us from '@/components/pages/about_us.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/main"
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      redirect: "/home_service",
      children: [
        { path: '/home_service', component: home_service, name: 'home_service' },
        { path: '/visa_service', component: visa_service, name: 'visa_service' },
        { path: '/account_service', component: account_service, name: 'visa_service' },
        { path: '/value_add_service', component: value_add_service, name: 'visa_service' },
        { path: '/about_us', component: about_us, name: 'visa_service' },
        { path: '/chinese', component: home_service, name: 'visa_service' },
        { path: '/english', component: visa_service, name: 'visa_service' },
      ]
    },
  ]
})
