/**
 * Created by yinshipeng on 2016/11/3.
 */
import User from '../views/user/user.vue';
import UserAdd from '../views/user/user.add.vue';
export default [
  {
    path:'/user',
    name:'user',
    component:User,
    meta: {
        keepAlive: true
    }
  },
  {
    path:'/user/add',
    name:'user.add',
    component:UserAdd
  },
  {
    path:'/user/update/:id',
    name:'user.update',
    component:UserAdd
  }

]
