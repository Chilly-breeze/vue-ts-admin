import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/layout/Index.vue'


Vue.use(Router)
export const asyncRouterMap = [
    {
        path: '/',
        name: 'dashboard',
        component: Index,
        redirect: '/home',
        hidden: true,
        children: [
            {
                path: '/home',
                name: 'home',
                meta: { title: '首页', icon: 'fa fa-home' },
                component: () => import('@/views/Home.vue')
            }
        ]
    },
    {
        path: '/dataManage',
        name: 'dataManage',
        component: Index,
        hidden: true,
        meta: { title: '数据管理', icon: 'fa fa-database' },
        redirect:'/tableData',
        children:[
            {
                path: '/tableData',
                meta: { title: '表格管理', icon: 'fa fa-table' },
                name:'tableData',
                component: () => import('@/views/DataManage/TableData.vue')
            },
            {
                path: '/chartsData',
                name: 'chartsData',
                meta: { title: '图表管理', icon: 'fa fa-bar-chart' },
                component: () => import('@/views/DataManage/ChartsData.vue')
            },
            {
                path: '/formData',
                name: 'formData',
                meta: {
                    title: '表单管理',
                    icon: 'fa fa-file-text-o',
                    roles: ['admin', 'editor']
                },
                component: () => import('@/views/DataManage/FormData.vue')
            }
        ]
    },
    {
        path: '/userManage',
        name: 'userManage',
        component:Index,
        hidden: true,
        redirect: '/accountData',
        children:[
            {
                path:'/accountData',
                meta: { title: '账户管理', icon: 'fa fa-user-plus', roles: ['admin'] },
                name:'accountData',
                component: () => import('@/views/UserManage/AccountData.vue')
            }
        ]
    },
    {
        path:'/user',
        name:'user',
        component:Index,
        hidden: false,
        redirect:'/userInfo',
        children:[
            {
                path: '/userInfo',
                name: 'userInfo',
                meta: { title: '个人中心' },
                component: () => import('@/views/UserManage/UserInfo.vue')
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        hidden: false,
        meta: { title: '404' },
        component: () => import('@/views/404.vue')
    },
    {
        path: '*',
        hidden: false,
        meta: { title: '404' },
        redirect: '/404'
    },
    {
        path: '/login',
        name: 'login',
        hidden: false,
        meta: { title: '系统登录' },
        component: () => import('./views/login/Login.vue')
    },
    {
        path: '/password',
        name: 'password',
        hidden: false,
        meta: { title: '找回密码' },
        component: () => import('./views/password/Password.vue')
    }
]
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: asyncRouterMap
})

router.beforeEach((to: any, from: any, next: any) => {
    let isLogin = localStorage.getItem('istoken') ? true : false;
    if (to.path == '/login' || to.path == '/password') {
        next()
    } else {
        isLogin ? next() : next('/login')
    }
})

export default router;