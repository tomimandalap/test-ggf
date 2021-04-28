<template>
  <div class="home">
    <Navbar />
    <div class="jumbotron jumbotron-fluid img-bg min-vh-100">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-none d-sm-none d-md-block"></div>
          <div class="col-md-6 col-sm-12 text-white m-home t-shadow">
            <h1 class="display-4 text-uppercase font-weight-bold">
              CoronaVirus
            </h1>
            <h3 class="text-uppercase font-weight-bold">Covid-19</h3>
            <p class="lead">
              Covid-19 is the infectious disease caused by the most recently
              discovered coronavirus. This new virus and disease were unknown
              before the outbreak began in Wuhan, China, in December 2019.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Global />
    <Local />
    <Detail />
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Global from '../components/Global'
import Local from '../components/Local'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Global,
    Local,
    Detail,
    Footer
  }
}
</script>
<style scoped>
.img-bg {
  background-image: url("../assets/images/bg-home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.m-home {
  margin-top: 9.375rem;
}
@media (max-width: 991.98px) {
  .display-4 {
    font-size: 38px;
  }
}
</style>
