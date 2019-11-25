import '@babel/polyfill'
import 'intersection-observer' // Optional
import 'es6-promise/auto'

import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// style
import  '@/assets/css/bootstrap.min.css'
import '@/assets/css/animate.css'
import '@/assets/css/owl.carousel.min.css'
import '@/assets/css/themify-icons.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/magnific-popup.css'
import '@/assets/css/slick.css'
import '@/assets/css/nice-select.css'
import '@/assets/css/style.css'



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
