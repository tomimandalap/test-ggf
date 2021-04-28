<template>
  <div class="location">
    <div class="container">
      <div v-if="isLoading" class="text-center min-vh-100">
        <b-spinner
          style="width: 3rem; height: 3rem"
          variant="primary"
          label="Text Centered"
          class="spiner-vh"
        ></b-spinner>
      </div>
      <div v-else class="card border-0 min-vh-100">
        <div class="card-body mb-3 text-center">
          <h5 class="card-title font-weight-bold mt-3">Your location</h5>
          <form @submit.prevent="btnSave()" class="mb-5">
            <label for="form-long" class="float-left font-weight-bold"
              >Logintude :
            </label>
            <input
              v-model="form.longi"
              active
              type="text"
              placeholder="longitude"
              required
              id="form-long"
              class="form-control inputBorder mb-4"
            />
            <label for="form-lat" class="float-left font-weight-bold"
              >Latitude :
            </label>
            <input
              v-model="form.lat"
              type="text"
              placeholder="Latitude"
              required
              id="form-lat"
              class="form-control inputBorder mb-5"
            />
            <span
              @click="btnChange"
              class="btn btn-outline-dark w-100 p-2 mb-5 cursor"
            >
              <b-icon
                :icon="!stateBtn ? 'geo-alt' : 'clock-history'"
                :animation="!stateBtn ? 'fade' : 'spin'"
              />
              <span v-if="!stateBtn"> Change Location</span>
              <span v-else> Set location</span>
            </span>
            <h5 class="card-title font-weight-bold">Masukkan password</h5>
            <input
              v-model="form.password"
              type="password"
              placeholder="password"
              minlength="8"
              required
              class="form-control inputBorder mb-5"
            /><button type="submit" class="btn btn-outline-success w-100 p-2">
              Save
            </button>
          </form>
          <button @click="$router.push('/')" class="btn btn-dark w-100 p-2">
            <b-icon icon="chevron-left" animation="cylon" />
            <span> Back</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import swalert from '../helpers/swalert'
export default {
  mixins: [swalert],
  data: () => ({
    isLoading: false,
    stateBtn: false,
    id: null,
    form: {
      longi: '',
      lat: '',
      password: ''
    }
  }),
  computed: {
    ...mapGetters({
      detailUser: 'detailUser'
    })
  },
  methods: {
    ...mapActions({
      getDetailUser: 'getDetailUser',
      updateUser: 'updateUser'
    }),
    btnSave () {
      const today = new Date().toISOString().slice(0, 10)
      const time = new Date().toTimeString().slice(0, 8)
      const datetime = today + ' ' + time
      const newData = {
        id: this.id,
        file: {
          longi: this.form.longi,
          lat: this.form.lat,
          password: this.form.password,
          update_at: datetime
        }
      }
      this.getDetailUser(this.id) // get ulang
      this.updateUser(newData).then((response) => {
        this.alertModif('success', response.message)
        this.form = { longi: this.form.longi, lat: this.form.lat, password: '' } // set ulang
      }).catch((error) => {
        if (error.status === 400) {
          this.alertPopUp('warning', 'Oops...,', error.data.message)
          this.form = { longi: this.detailUser.longi, lat: this.detailUser.lat } // set ulang
        } else {
          this.form = { longi: this.detailUser.longi, lat: this.detailUser.lat } // set ulang
          console.log(error.statusText)
        }
      })
    },
    showPosition (position) {
      this.stateBtn = true
      const lat = position.coords.latitude.toString().slice(0, 5)
      const longi = position.coords.longitude.toString().slice(0, 6)
      setTimeout(() => {
        this.stateBtn = false
        this.form = { longi, lat }
      }, 3000)
    },
    btnChange () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.isLoading = true
    this.getDetailUser(this.id)
    setTimeout(() => {
      this.form = { longi: this.detailUser.longi, lat: this.detailUser.lat }
      this.isLoading = false
    }, 3000)
  }
}
</script>
<style scoped>
.spiner-vh {
  margin-top: 50vh;
}
</style>
