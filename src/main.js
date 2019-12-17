// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios' //主要ＡＪＡＸ套件
import VueAxios from 'vue-axios'//將它轉為ＶＵＥ的套件
import router from './router';
import vSelectMenu from 'v-selectmenu';
import 'bootstrap';

Vue.use(VueAxios, axios)
Vue.use(vSelectMenu, { global });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
