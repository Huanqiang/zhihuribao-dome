// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import RouterConfig from './router-config'
import Store from './store'

// import some global styles
import './styles/style.scss'

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: RouterConfig,
  store: Store,
  template: '<App/>',
  components: { App }
})
