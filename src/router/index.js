import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: {
      name: 'Login',
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import( /* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/:planetSlug',
    name: 'Planet',

    component: () => import( /* webpackChunkName: "planet" */ '../views/Planet.vue'),
    props: true,
    children: [


      {
        name: 'PlanetInfos',
        path: ':planetInfo',
        props: true,
        component: () => import( /* webpackChunkName: "planetinfo" */ '../views/PlanetInfo.vue'),
      }
    ],
    meta: {
      requiresAuth: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next()
    }
  } else {
    next();
  }
})
export default router