import Vue from 'vue';
import App from './app.vue';
import Commons from './commons';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './libs/bootstrap/css/bootstrap.min.css';
import './libs/lodash/lodash.min';
import router from './router';
import store from './store';

Vue.use(Element);
Vue.use(Commons);


router.beforeEach((to, from, next) => {
  if(store.getters.getIsLogin){
    if(to.path === '/login'){
      next({path:'/'});
    }else{
      next();
    }
  }else{
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
