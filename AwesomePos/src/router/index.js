import Vue from 'vue'
import Router from 'vue-router'
import leftNav from '@/components/common/leftNav'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: leftNav,
      redirect: '/pos',
      children:[{
        path: '/pos',
        name: 'Pos',
        meta: {
          title: '收银功能',
          ignoreAuth: true
        },
        component: resolve => require(['@/components/pos/Pos'], resolve)          
      },
      {
        path: '/store',
        name: 'Store',
        meta: {
          title: '商铺',
          ignoreAuth: true
        },
        component: resolve => require(['@/components/store/index'], resolve)          
      },
    ]
    }
  ]
})
