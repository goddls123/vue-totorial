import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Login from '@/components/login/login'
import Join from '@/components/join/join'
import Workspace from '../components/workspace/workspace'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    {path: '/workspace', name: 'workspace', component: Workspace},
    {path: '/login', name: 'login', component:Login},
    {path: '/join', name:'join',component:Join},
    {path: '/' ,name:'home',component:Home},
    {path:'/*' , redirect: {name:'home'}}
  ]
})
