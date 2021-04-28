<template>
  <div class="global mb-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h1 class="font-weight-bold c-secondary">Coronavirus Statistics</h1>
          <p class="c-text">
            Data on confirmed cases of COVID-19 around the <b>world</b> today.
          </p>
        </div>
      </div>
      <div v-if="isLoading" class="row mt-3">
        <div class="col-12 text-center">
          <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
      </div>
      <div v-else class="row mt-3 d-flex justify-content-center">
        <div class="card-group text-center">
          <div class="card border-info bg-transparent mb-3 w-card border-0">
            <div class="card-body text-info">
              <h3 class="card-title font-weight-bold">Cases</h3>
              <span>
                <i class="fas fa-virus f-xl"></i>
                <small class="font-weight-bold"
                  >+{{ setDigit(getData.active_diff || 123456) }}</small
                >
              </span>
              <h3 class="card-title mt-3 mb-0 font-weight-bold">
                {{ setDigit(getData.active || 123456) }}
              </h3>
              <!-- <small class="card-subtitle">last update : 2021-04-26</small> -->
            </div>
          </div>
          <div class="card border-success bg-transparent mb-3 w-card border-0">
            <div class="card-body text-success">
              <h3 class="card-title font-weight-bold">Recovered</h3>
              <span>
                <i class="fas fa-user-nurse f-xl"></i>
                <small class="font-weight-bold"
                  >+{{ setDigit(getData.recovered_diff || 123456) }}</small
                >
              </span>
              <h3 class="card-title mt-3 mb-0 font-weight-bold">
                {{ setDigit(getData.recovered || 123456) }}
              </h3>
              <!-- <small class="card-subtitle">last update : 2021-04-26</small> -->
            </div>
          </div>
          <div class="card border-danger bg-transparent mb-3 w-card border-0">
            <div class="card-body text-danger">
              <h3 class="card-title font-weight-bold">Deaths</h3>
              <span>
                <i class="fas fa-user-alt-slash f-xl"></i>
                <small class="font-weight-bold"
                  >+{{ setDigit(getData.deaths_diff || 123456) }}</small
                >
              </span>
              <h3 class="card-title mt-3 mb-0 font-weight-bold">
                {{ setDigit(getData.deaths || 123456) }}
              </h3>
              <!-- <small class="card-subtitle">last update : 2021-04-26</small> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import digit from '../helpers/digit.js'
export default {
  mixins: [digit],
  data: () => ({
    isLoading: false
  }),
  computed: {
    ...mapGetters({
      getData: 'data/getData'
    })
  },
  methods: {
    ...mapActions({
      globalData: 'data/getGlobalData'
    })
  },
  mounted () {
    this.isLoading = true
    this.globalData()
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
