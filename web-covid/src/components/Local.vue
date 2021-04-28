<template>
  <div class="local bg-white">
    <div class="container">
      <div class="row text-center">
        <div class="col-12 mt-5">
          <!-- <h1 class="font-weight-bold c-secondary"></h1> -->
          <p class="c-text">
            Current data on confirmed COVID-19 cases across <b>Indonesia</b>.
          </p>
        </div>
      </div>
      <div v-if="isLoading" class="row mt-3">
        <div class="col-12 text-center mb-5">
          <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
      </div>
      <div v-else>
        <div
          v-if="getLocal.length"
          class="row mt-3 d-flex justify-content-center"
        >
          <div class="col-md-12">
            <GoogleMapMaps
              :center="{
                lat: setToNumber(getLat),
                lng: setToNumber(getLong),
              }"
              :zoom="3"
              map-type-id="terrain"
              style="width: 100%; height: 200px; margin-bottom: 20px"
            >
              <GoogleMapMarker
                :position="{
                  lat: setToNumber(getLat),
                  lng: setToNumber(getLong),
                }"
              ></GoogleMapMarker>
            </GoogleMapMaps>
          </div>
          <div class="col-md-12">
            <div class="card-group text-center mb-5">
              <div class="card bg-transparent mb-3 w-card border-0">
                <div class="card-body text-info">
                  <h3 class="card-title font-weight-bold">Cases</h3>
                  <span>
                    <i class="fas fa-virus f-xl"></i>
                    <small class="font-weight-bold"
                      >+{{ setDigit(getLocal[0].active_diff) }}</small
                    >
                  </span>
                  <h3 class="card-title mt-3 mb-0 font-weight-bold">
                    {{ setDigit(getLocal[0].active) }}
                  </h3>
                  <!-- <small class="card-subtitle">last update : 2021-04-26</small> -->
                </div>
              </div>
              <div class="card bg-transparent mb-3 w-card border-0">
                <div class="card-body text-success">
                  <h3 class="card-title font-weight-bold">Recovered</h3>
                  <span>
                    <i class="fas fa-user-nurse f-xl"></i>
                    <small class="font-weight-bold"
                      >+{{ setDigit(getLocal[0].recovered_diff) }}</small
                    >
                  </span>
                  <h3 class="card-title mt-3 mb-0 font-weight-bold">
                    {{ setDigit(getLocal[0].recovered) }}
                  </h3>
                  <!-- <small class="card-subtitle">last update : 2021-04-26</small> -->
                </div>
              </div>
              <div class="card bg-transparent mb-3 w-card border-0">
                <div class="card-body text-danger">
                  <h3 class="card-title font-weight-bold">Deaths</h3>
                  <span>
                    <i class="fas fa-user-alt-slash f-xl"></i>
                    <small class="font-weight-bold"
                      >+{{ setDigit(getLocal[0].deaths_diff) }}</small
                    >
                  </span>
                  <h3 class="card-title mt-3 mb-0 font-weight-bold">
                    {{ setDigit(getLocal[0].deaths) }}
                  </h3>
                  <!-- <small class="card-subtitle">last update : 2021-04-26</small> -->
                </div>
              </div>
              <div class="card bg-transparent mb-3 w-card border-0">
                <div class="card-body text-dark">
                  <h3 class="card-title font-weight-bold">Fatality Rate</h3>
                  <span>
                    <i class="fas fa-frown-open f-xl"></i>
                    <!-- <small class="font-weight-bold"
                      >+{{ setDigit(getLocal[0].deaths_diff) }}</small
                    > -->
                  </span>
                  <h3 class="card-title mt-3 mb-0 font-weight-bold">
                    {{ setDigit(getLocal[0].fatality_rate) }}
                  </h3>
                  <!-- <small class="card-subtitle">last update : 2021-04-26</small> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row mt-3 text-center">
          <div class="col-12 mb-5">
            <span><b-icon icon="folder" class="f-xl" /></span>
            <h3 class="font-weight-bold">Data not found!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import digit from '../helpers/digit.js'
import * as VueGoogleMaps from 'vue2-google-maps'
export default {
  mixins: [digit],
  data: () => ({
    isLoading: false
  }),
  components: {
    GoogleMapMaps: VueGoogleMaps.Map,
    GoogleMapMarker: VueGoogleMaps.Marker
  },
  computed: {
    ...mapGetters({
      getLocal: 'data/getLocal',
      getLat: 'data/getLat',
      getLong: 'data/getLong'
    })
  },
  methods: {
    ...mapActions({
      localData: 'data/getGlobalLocal'
    })
  },
  mounted () {
    this.isLoading = true
    this.localData()
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>
<style scoped>
.w-card {
  width: 14.5rem;
}
@media (max-width: 767.98px) {
  .w-card {
    width: 100%;
  }
}
</style>
