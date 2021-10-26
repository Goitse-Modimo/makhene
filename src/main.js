import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.use(vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
