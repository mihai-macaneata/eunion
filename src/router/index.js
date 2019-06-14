import Vue from 'vue'
import Router from 'vue-router'
const Menu = () => import(/* webpackChunkName: "menu" */ '@/views/Home')
const Countries = () => import(/* webpackChunkName: "countries" */ '@/views/Countries')
const Catalogue = () => import(/* webpackChunkName: "catalogue" */ '@/views/Catalogue')
const Topics = () => import(/* webpackChunkName: "topics" */ '@/views/Topics')

// Routes
import paths from './paths'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Home',
    component: Menu
  },
  {
    path: '/topics',
    name: 'Topics',
    component: Topics
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue
  }
]
// Create a new router

const routerOptions = {
    routes,
    linkActiveClass: 'open active',
    mode: 'hash',
    scrollBehavior: () => ({
      y: 0
    }),
    base: '/'
  }
  const router = new Router(routerOptions)

export default router
