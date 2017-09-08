/**
 * Created by yinshipeng on 2016/11/3.
 */
import Home from '../components/home.vue';
import UserRouter from './user.router';
export default [
  {
    path:'/',
    name:'home',
    component:Home,
    children:[
      ...UserRouter
    ]
  }
]
