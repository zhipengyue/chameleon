import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('./pages/Index.vue')
    },
    // {
    //   path:'/main',
    //   name:'main',
    //   component: ()=>import('./components/main/main.vue')
    // },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/Home/home.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import(/* webpackChunkName: "about" */ './pages/Editer/editor.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/About.vue')
    }
  ]
})
