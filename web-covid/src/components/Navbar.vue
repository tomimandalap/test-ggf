<template>
  <b-navbar
    lg
    toggleable="sm"
    type="dark"
    :variant="state ? 'dark' : 'transpernt'"
    class="fixed-top shadow"
  >
    <div class="container">
      <b-navbar-brand href="/" class="font-weight-bold text-uppercase"
        >Cov-19</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
        <b-navbar-nav class="d-none d-sm-block">
          <router-link
            to="/"
            :class="
              $route.fullPath === '/'
                ? 'active mr-3 text-decoration-none text-white font-weight-bold text-uppercase'
                : 'mr-3 text-decoration-none text-white text-uppercase'
            "
          >
            Home
          </router-link>
          <a
            href="#footer"
            :class="
              $route.fullPath === '/#footer'
                ? 'active text-decoration-none text-white font-weight-bold text-uppercase'
                : 'text-decoration-none text-white text-uppercase'
            "
            >About</a
          >
        </b-navbar-nav>
        <b-navbar-nav class="d-flex d-sm-none">
          <router-link
            to="/"
            :class="
              $route.fullPath === '/'
                ? 'active mr-3 text-decoration-none text-white font-weight-bold text-uppercase mb-3'
                : 'mr-3 text-decoration-none text-white text-uppercase mb-3'
            "
          >
            Home
          </router-link>
          <a
            href="#footer"
            :class="
              $route.fullPath === '/#footer'
                ? 'active text-decoration-none text-white font-weight-bold text-uppercase mb-3'
                : 'text-decoration-none text-white text-uppercase mb-3'
            "
            >About</a
          >
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  name: 'Nabvar',
  data: () => ({
    windowTop: 0,
    state: false
  }),
  mounted () {
    window.addEventListener('scroll', this.onScroll, true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll, true)
  },
  methods: {
    onScroll (e) {
      this.windowTop = window.top.scrollY
      if (window.scrollY >= 125) {
        this.state = true
      } else {
        this.state = false
      }
    }
  }
}
</script>
