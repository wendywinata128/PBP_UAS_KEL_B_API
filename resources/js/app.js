require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'
import router from './VueRouter/vuerouter'
import vuetify from './Vuetify/vuetify'
import store from './Vuex'
import Bootstrap from './Vue-Bootstrap'
import '@mdi/font/css/materialdesignicons.css'


Vue.config.productionTip = false;

new Vue({
    iconfont: 'mdi',
    store,
    Bootstrap,
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app');


