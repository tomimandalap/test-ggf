import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Location from '../views/Location.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Swal from 'sweetalert2'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { auth: true }
  },
  {
    path: '/location/:id',
    name: 'Location',
    component: Location,
    meta: { auth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { auth: false }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: { auth: false }
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
    if (store.getters.getToken) {
      next()
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'warning',
        title: 'You are not logged in!'
      })
      router.push('/signin').catch(() => {})
    }
  } else if (to.matched[0].meta.auth === false) {
    if (store.getters.getToken) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Welcome, you have logged in!'
      })
      router.push('/').catch(() => {})
    } else {
      next()
    }
  } else {
    next()
  }
})

const DEFAULT_TITLE = 'Auth GGF'
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.name + ' | ' + DEFAULT_TITLE || DEFAULT_TITLE
  })
})

export default router
