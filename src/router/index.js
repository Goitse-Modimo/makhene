import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path:'/login',
            name:'Home',
            component: Login
        }
    ]
})

export default router