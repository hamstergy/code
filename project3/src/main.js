// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import './assets/css/custom.css';
import VueImg from 'v-img';
 
Vue.use(VueImg);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
