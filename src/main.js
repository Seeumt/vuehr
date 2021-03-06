import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import {postRequest} from "./utils/api";
import {postKeyValueRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {initMenu} from "./utils/menus";
import {nextDate} from "element-ui/src/utils/date-util";

Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);

router.beforeEach((to, from, next)=>{
  if (to.path == '/') {
    next();
  }else {
    initMenu(router, store);
    next();
  }
});

new Vue({
  router,
  store,
  render: a => a(App)
}).$mount('#app')
//把这个挂载到 index.html中的 id=app的div 上去
