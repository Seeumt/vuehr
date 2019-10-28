import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  render: a => a(App)
}).$mount('#app')//把这个挂载到 index.html中的 id=app的div 上去
