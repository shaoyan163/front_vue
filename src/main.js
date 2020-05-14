import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
// import HelloWorld from './components/HelloWorld.vue'
// Vue.component("hello-world",HelloWorld);
Vue.use(ElementUI);
Vue.config.devtools=true;
Vue.config.productionTip=false;


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
