import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { access: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (to.matched[0].meta.auth === true) {
    if (store.getters['users/getToken']) {
      next()
    } else {
      // const Toast = Swal.mixin({
      //   toast: true,
      //   position: 'top-end',
      //   showConfirmButton: false,
      //   timer: 3000,
      //   timerProgressBar: true,
      //   didOpen: (toast) => {
      //     toast.addEventListener('mouseenter', Swal.stopTimer)
      //     toast.addEventListener('mouseleave', Swal.resumeTimer)
      //   }
      // })
      // Toast.fire({
      //   icon: 'warning',
      //   title: 'You are not logged in!'
      // })
      // router.push('/login').catch(() => {})
      next()
    }
  } else {
    next()
  }
})

const DEFAULT_TITLE = 'Cov-19'
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.name + ' | ' + DEFAULT_TITLE || DEFAULT_TITLE
  })
})

export default router
