// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Radio, Input, Row, Col, List, message} from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(List)
Vue.prototype.$message = message
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
