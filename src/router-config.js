import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './components/About'
import Daily from './components/Daily'
import Theme from './components/Theme'
import ThemeContentList from './components/ThemeContentList'

Vue.use(VueRouter)

const routes = [{
	path: '/dailies',
	alias: '/',
	component: Daily
},{
	path: '/themes',
	component: Theme
},{
  path: '/theme/:id',
  name: 'themes-list',
  component: ThemeContentList
},{
	path: '/about',
	component: About
}]



const router = new VueRouter({
	routes: routes
})

export default router