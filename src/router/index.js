import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {requireAuth: false}
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "home" */ '../views/Register.vue'),
    meta: {requireAuth: false}
  },
  {
    path: '/registerProd',
    name: 'RegisterProd',
    component: () => import(/* webpackChunkName: "home" */ '../views/RegisterProd.vue'),
    meta: {requireAuth: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

    if(rutaProtegida && store.state.token === null){
        // ruta protegida es true
        // token es nulo true, por ende redirigimos al inicio
        next({name: 'Home'})
    }else{
        // En caso contrario sigue...
        next()
    }

})

export default router
