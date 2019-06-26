// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import * as xiao from './api'//全局引入自定义方法
Vue.prototype.xiao=xiao//挂载到原型上 全局可通过this.xiao.XXXX()调用 可以查看历史今天页面调用方式
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
