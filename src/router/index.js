import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movies'
import Top from '@/components/top250'
import Home from '@/pages/Home/home'
import Broadcast from '@/pages/Broadcast/broadcast'
import Audio from '@/pages/Audio/audio'
import Group from '@/pages/Group/group'
import Mine from '@/pages/Mine/mine'
import Detail from '@/pages/Detail/detail'
import Music from '@/pages/Broadcast/music'
import Wutai from '@/pages/Broadcast/wutai'
import Concert from '@/pages/Broadcast/concert'
import Damai from '@/pages/Detail/detaildamai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
        {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/audio',
      redirect:'/audio/movie'
    },
      {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[{path:'movie',component:Movie},
      {
        path:'/audio/top250',
        component:Top
      },
    ]
    },

    {
      path:'/broadcast',
      redirect:'/broadcast/music'
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast,
      children:[{
        path:'music',
        component:Music
      },
      {
        path:'wutai',
        component:Wutai
      },
      {
        path:'concert',
        component:Concert
      },
    ]
      
    },
      {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/broadcast/music/:id',
      component: Damai
    },
        {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
