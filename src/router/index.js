import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/showcase',
      name: 'showcase',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "showcase" */ '@/views/Showcase.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog.vue')
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue')
    },
    {
      path: '/admin/add-post',
      name: 'addPost',
      component: () => import(/* webpackChunkName: "admin/addPost" */ '@/views/admin/addPost.vue')
    },
    {
      path: '/admin/editPost/:id',
      name: 'editPost',
      component: () => import(/* webpackChunkName: "admin/editPost" */ '@/views/admin/editPost.vue')
    }
  ]
})
