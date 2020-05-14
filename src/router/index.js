import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入组件
import greeting from '../components/greeting'
import ProjectsList from '../components/ProjectsList'
import Login from '../components/Login'
import HelloWorld from '../components/HelloWorld'

//创建路由
const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: HelloWorld, name: "home"},
        {path: "/greeting", component: greeting, name: "greet"},
        {path: "/login", component: Login, name: "login"},
        {path: "/login2", component: ProjectsList, name: "projectList"}

    ]
})

//导出路由
export default router