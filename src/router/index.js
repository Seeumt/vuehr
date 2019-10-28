import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    }

    //  delete {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')//动态导入 等用的时候再导入
    // }
]

const router = new VueRouter({
    routes
})

export default router
