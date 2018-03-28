import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/hi'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
//   mode:'history',
//   mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        leftNav:Hi,
        rightNav:Hi
      }
    },
    {
        path: '/hi',
        name: 'Hi',
        component: Hi
    },
    {
        path:'/params/:newsId/:newsTitle',
        // path:'/params/:newsId(\\d+)/:newsTitle',
        name:Params,
        component:Params
        // ,
        // beforeEnter:(to,from,next)=>{
        //     console.log('我进入了paramas模板');
        //     console.log(to);
        //     console.log(from);
        //     // next(false);//是否允许跳转
        // }    //最好写在组件里

    },
    {
        path:'/goHome',
        redirect:'/hi'
    },
    {
        path:'/goParams/newsId(\\d+)/:newsTitle',
        redirect:'/params/:newsId/:newsTitle'
    },
    {
        path:'/hi',
        component:Hi,
        alias:'/test'
    },
    {
        path:'*',
        component:Error
    }
  ]
})
/*
**  redirect和alias的区别
**  redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
**  alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。
*/