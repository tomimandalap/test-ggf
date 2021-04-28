<template>
  <div class="footer bg-white" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-sm-12 col-12 mt-5">
          <h5 class="font-weight-bold text-uppercase">About</h5>
          <p>
            The covid-19 website was designed using the Vue JS framework,
            bootstrap and Vue2 Google Maps. This website is designed as a source
            of information for Covid-19 in the world and Indonesia. This website
            is linked to the REST API for Postman documentation which can be
            found
            <a
              href="https://documenter.getpostman.com/view/10724784/SzYXWz3x?version=latest"
              target="_blank"
              >here</a
            >. Web Cov-19 has a responsive design making it easier for all
            devices.
          </p>
        </div>
        <div class="col-md-3 col-sm-12 col-12 mt-5">
          <h5 class="font-weight-bold text-uppercase">Tech & Freamwork</h5>
          <ul class="ml-n5">
            <li class="mt-3 ml-2">
              <a class="text-dark" href="https://vuejs.org/" target="_blank">
                <i class="fab fa-vuejs"></i> VueJs
              </a>
            </li>
            <li class="mt-3 ml-2">
              <a
                class="text-dark"
                href="https://www.npmjs.com/package/vue2-google-maps"
                target="_blank"
                ><i class="fas fa-location-arrow"></i> Vue2 Google Maps
              </a>
            </li>
            <li class="mt-3 ml-2">
              <a
                class="text-dark"
                href="https://www.npmjs.com/package/bootstrap-vue"
                target="_blank"
              >
                <i class="fab fa-bootstrap"></i> Bootstrap-Vue
              </a>
            </li>
            <li class="mt-3 ml-2">
              <a
                class="text-dark"
                href="https://www.npmjs.com/package/sweetalert2"
                target="_blank"
              >
                <i class="fas fa-palette"></i> Sweetalert2
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-12 col-12 mt-5">
          <h5 class="font-weight-bold text-uppercase">Contact</h5>
          <ul class="ml-n5">
            <li class="mt-3 ml-2">
              <a
                class="text-dark"
                href="https://instagram.com/duinogram"
                target="_blank"
                ><b-icon-instagram /> Instagram
              </a>
            </li>
            <li class="mt-3 ml-2">
              <a
                class="text-dark"
                href="https://www.linkedin.com/in/tomimandalaputra/"
                target="_blank"
              >
                <b-icon-linkedin /> Linkedin
              </a>
            </li>
            <li class="mt-3 ml-2">
              <a
                class="text-dark"
                href="https://github.com/tomimandalap"
                target="_blank"
              >
                <b-icon-github /> gitHub
              </a>
            </li>
            <li class="mt-3 ml-2">
              <a
                class="text-dark"
                href="https://www.youtube.com/channel/UC_fv2BRFv2zde5ZMQ5uqauA"
                target="_blank"
              >
                <b-icon-youtube /> Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-center mb-5">
          &copy; created by Tomi Mandala Putra - 2021
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  height: 24rem;
}
@media (max-width: 991.98px) {
  .footer {
    height: 100%;
  }
}
</style>
