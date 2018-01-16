import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/layout/main'
import visa_service from '@/components/pages/visa_service.vue'
import home_service from '@/components/pages/home_service.vue'
import accounting_service from '@/components/pages/accounting_service.vue'
import value_add_service from '@/components/pages/value_add_service.vue'
import travel_service from '@/components/pages/travel_service.vue'
import about_us from '@/components/pages/about_us.vue'
import travel_router_info from '@/components/pages/travel/router_info_service.vue'
import travel_sa_info from '@/components/pages/travel/sa_info_service.vue'
import travel_poster_info from '@/components/pages/travel/poster_info_service.vue'

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
        { path: '/accounting_service', component: accounting_service, name: 'accounting_service' },
        { path: '/value_add_service', component: value_add_service, name: 'value_add_service' },
        {
          path: '/travel_service',
          component: travel_service,
          name: 'travel_service',
          redirect: "/travel_router_info",
          children: [
            { path: '/travel_router_info', component: travel_router_info, name: 'travel_router_info' },
            { path: '/travel_sa_info', component: travel_sa_info, name: 'travel_sa_info' },
            { path: '/travel_poster_info', component: travel_poster_info, name: 'travel_poster_info' },
          ]
        },
        { path: '/about_us', component: about_us, name: 'about_us' },
        { path: '/contact_us', component: about_us, name: 'contact_us' },
        { path: '/chinese', component: home_service, name: 'chinese_service' },
        { path: '/english', component: visa_service, name: 'english_service' },
      ]
    },
  ]
})
