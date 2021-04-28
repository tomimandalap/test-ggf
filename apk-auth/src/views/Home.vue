<template>
  <div class="home">
    <div v-if="isLoading" class="text-center min-vh-100">
      <b-spinner
        style="width: 3rem; height: 3rem"
        variant="primary"
        label="Text Centered"
        class="spiner-vh"
      ></b-spinner>
    </div>
    <div v-else class="card border-0 shadow min-vh-100">
      <div class="card-body mb-3 text-center">
        <div class="py-3">
          <div class="container d-flex justify-content-center mb-2">
            <img
              class="img-people"
              :src="
                detailUser.image
                  ? `${getURL}/image/${detailUser.image}`
                  : `${getURL}/image/profile.png`
              "
              :alt="detailUser.image"
            />
          </div>
          <p class="text-center">
            <input
              type="file"
              accept="image/png/jpg"
              id="fileUpload"
              class="d-none"
              @input="editImageUser"
            />
            <b-link
              class="text-muted text-decoration-none"
              onclick="document.getElementById('fileUpload').click()"
            >
              <b-icon icon="pencil"></b-icon> Edit
            </b-link>
          </p>
          <div class="container text-center">
            <h4 class="font-weight-bold">{{ detailUser.username }}</h4>
          </div>
        </div>

        <div class="mb-3 d-none d-sm-block">
          <button
            v-if="detailUser.status == 0"
            @click="btnCheckin"
            class="btn btn-outline-success w-25"
          >
            <b-icon
              :icon="!stateBtn ? 'patch-check' : 'clock-history'"
              :animation="!stateBtn ? 'fade' : 'spin'"
            />
            <span v-if="!stateBtn"> Check In</span>
            <span v-else> Wait</span>
          </button>
          <button v-else class="btn btn-outline-dark w-25 disabled">
            Check In
          </button>
        </div>
        <div class="mb-3 d-block d-sm-none">
          <button
            v-if="detailUser.status == 0"
            @click="btnCheckin"
            class="btn btn-outline-success w-100"
          >
            <b-icon
              :icon="!stateBtn ? 'patch-check' : 'clock-history'"
              :animation="!stateBtn ? 'fade' : 'spin'"
            />
            <span v-if="!stateBtn"> Check In</span>
            <span v-else> Wait</span>
          </button>
          <button v-else class="btn btn-outline-dark w-100 disabled">
            Check In
          </button>
        </div>

        <div class="mb-5 d-none d-sm-block">
          <button
            v-if="detailUser.status == 0"
            class="btn btn-outline-dark w-25 disabled"
          >
            Check Out
          </button>
          <button
            v-else
            @click="btnCheckOut"
            class="btn btn-outline-danger w-25"
          >
            <b-icon
              :icon="!stateBtn ? 'patch-check' : 'clock-history'"
              :animation="!stateBtn ? 'fade' : 'spin'"
            />
            <span v-if="!stateBtn"> Check Out</span>
            <span v-else> Wait</span>
          </button>
        </div>
        <div class="mb-5 d-block d-sm-none">
          <button
            v-if="detailUser.status == 0"
            class="btn btn-outline-dark w-100 disabled"
          >
            Check Out
          </button>
          <button
            v-else
            @click="btnCheckOut"
            class="btn btn-outline-danger w-100"
          >
            <b-icon
              :icon="!stateBtn ? 'arrow-repeat' : 'clock-history'"
              :animation="!stateBtn ? 'fade' : 'spin'"
            />
            <span v-if="!stateBtn"> Check Out</span>
            <span v-else> Wait</span>
          </button>
        </div>

        <p v-if="detailUser.status == 0" class="text-center mb-5 text-dark">
          <b-icon icon="geo-alt" animation="fade" /> Anda berada diluar
          jangkauan!
        </p>
        <p v-else class="text-center mb-5 text-success">
          <b-icon icon="geo-alt-fill" animation="cylon-vertical" /> Anda dalam
          jangkauan.
        </p>

        <div class="mb-3 d-sm-block d-none">
          <button
            @click="$router.push(`/location/${getID}`)"
            class="btn btn-outline-info w-25"
          >
            Change Location
          </button>
        </div>
        <div class="mb-3 d-sm-none d-block">
          <button
            @click="$router.push(`/location/${getID}`)"
            class="btn btn-outline-info w-100"
          >
            Change Location
          </button>
        </div>

        <div class="d-none d-sm-block">
          <button @click="btnLogout" class="btn btn-outline-dark w-25">
            Logout
          </button>
        </div>
        <div class="d-block d-sm-none">
          <button @click="btnLogout" class="btn btn-outline-dark w-100">
            Logout
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
  name: 'Home',
  data: () => ({
    isLoading: false,
    imageUrl: '',
    imageRaw: '',
    stateBtn: false
  }),
  computed: {
    ...mapGetters({
      getURL: 'getURL',
      getID: 'getID',
      detailUser: 'detailUser'
    })
  },
  methods: {
    ...mapActions({
      logoutUser: 'logoutUser',
      getDetailUser: 'getDetailUser',
      updateUser: 'updateUser',
      checkLocation: 'checkLocation'
    }),
    editImageUser (e) {
      const image = e.target.files[0]
      if (image) {
        if (image.type !== 'image/jpeg' && image.type !== 'image/png' && image.type !== 'image/JPEG' && image.type !== 'image/PNG') {
          this.alertPopUp('error', 'Format File', 'Please enter a jpg/jpeg/png')
        } else {
          this.imageUrl = ''
          this.imageRaw = ''
          this.imageUrl = URL.createObjectURL(image)
          this.imageRaw = image
          const today = new Date().toISOString().slice(0, 10)
          const time = new Date().toTimeString().slice(0, 8)
          const datetime = today + ' ' + time
          const fd = new FormData()
          fd.append('image', this.imageRaw)
          fd.append('update_at', datetime)
          const newData = {
            id: this.getID,
            file: fd
          }
          this.updateUser(newData).then((response) => {
            this.getDetailUser(this.getID) // get detail
            this.alertModif('success', response.message)
          }).catch((error) => {
            console.log(error.statusText)
          })
        }
      }
    },
    showPosition (position) {
      const lat = position.coords.latitude.toString().slice(0, 5)
      const longi = position.coords.longitude.toString().slice(0, 6)
      const data = {
        id: parseInt(this.getID),
        lat,
        longi
      }
      this.stateBtn = true
      setTimeout(() => {
        this.checkLocation(data).then((response) => {
          this.getDetailUser(this.getID) // get detail
          this.stateBtn = false
          this.alertModif('info', response.message)
        }).catch((error) => {
          this.stateBtn = false
          console.log(error.statusText)
        })
      }, 2000)
    },
    btnCheckin () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      }
    },
    btnCheckOut () {
      this.stateBtn = true
      const newData = {
        id: this.getID,
        file: {
          status: 0
        }
      }
      setTimeout(() => {
        this.stateBtn = false
        this.updateUser(newData).then((response) => {
          this.getDetailUser(this.getID) // get detail
          this.alertModif('success', 'Check out success!')
        }).catch((error) => {
          console.log(error.statusText)
        })
      }, 2000)
    },
    btnLogout () {
      this.logoutUser().then((response) => {
        if (response) {
          this.$router.push('/signin')
          this.alertModif('info', 'See you!')
        }
      })
    }
  },
  mounted () {
    this.isLoading = true
    this.getDetailUser(this.getID)
    setTimeout(() => {
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
