import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Archives from '@/views/Archives/Archives.vue'
import Tags from '@/views/Tags/Tags.vue'
import Categories from '@/views/Categories/Categories.vue'
import Music from '@/views/List/Music/Music.vue'
import Movie from '@/views/List/Movie/Movie.vue'
import About from '@/views/About/About.vue'
import Link from '@/views/link/Link.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    component: Home, // 未匹配路由的处理组件
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/archives',
    component: Archives,
  },
  {
    path: '/tags',
    component: Tags,
  },
  {
    path: '/categories',
    component: Categories,
  },
  {
    path: '/list:',
    children:[
    {
      path: '/music',
      component :Music,
    },
    {
      path: '/videos',
      component :Movie,
    },
  ]
  },
  {
    path: '/link',
    component: Link,
  },
  {
    path: '/about',
    component: About,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  })