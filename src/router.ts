import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login/Login.vue')
        },
        {
            path: '/password',
            name: 'password',
            component: () => import('./views/password/Password.vue')
        }
    ]
})

router.beforeEach((to:any, from:any, next:any) => {
    let isLogin = localStorage.getItem('istoken')?true:false;
    if (to.path == '/login' || to.path == '/password') {
        next()
    } else {
        isLogin?next():next('/login')
    }
})

export default router;