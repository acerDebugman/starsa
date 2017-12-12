import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/layout/main'
import visa_service from '@/components/pages/visa_service.vue'


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
      children: [
        { path: '/visa_service', component: visa_service, name: 'visa_service' },
      ]
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
