import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path:'/declarative',
    name:'declarative',
    component: () => import(/* webpackChunkName: "declarative" */ '../views/DeclarativeRenderingViewDemo.vue')
  },{
    path:'/attribute',
    name:'attribute',
    component: () => import(/* webpackChunkName: "attribute" */ '../views/AttributeBindingDemo.vue')
  },{
    path:'/eventListen',
    name:'eventListen',
    component: () => import(/* webpackChunkName: "eventListen" */ '../views/EventListenersDemo.vue')
  },{
    path:'/formBinding',
    name:'formBinding',
    component: () => import(/* webpackChunkName: "formBinding" */ '../views/FormBindingDemo.vue')
  },{
    path:'/conditionalRenderin',
    name:'conditionalRenderin',
    component: () => import(/* webpackChunkName: "conditionalRenderin" */ '../views/ConditionalRenderingDemo.vue')
  },{
    path:'/listRendering',
    name:'listRendering',
    component: () => import(/* webpackChunkName: "conditionalRenderin" */ '../views/ListRenderingDemo.vue')
  },{
    path:'/calculation',
    name:'calculation',
    component: () => import(/* webpackChunkName: "conditionalRenderin" */ '../views/CalculationPropertiesDemo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
