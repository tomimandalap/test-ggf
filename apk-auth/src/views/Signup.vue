<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      variant="danger"
      dismissible
      class="w-100 text-center position-absolute"
    >
      <p class="text-capitalize">{{ msgAlert }}</p>
      <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <div class="container d-flex flex-wrap justify-content-center">
      <section class="font-rubik p-5 box-body" style="background: #fff">
        <div class="row">
          <div class="col-12">
            <h5 class="text-center cf-second">Register</h5>
          </div>
        </div>
        <p class="mt-4">Let’s create your account!</p>
        <form
          action=""
          class="row justify-content-center"
          @submit.prevent="register()"
        >
          <label for="form-name" class="col-12 colorLabel mt-2">Username</label>
          <input
            v-model="formRegister.username"
            type="text"
            class="col-12 inputBorder pt-2 pb-2"
            id="form-name"
            placeholder="Username"
            required
          />
          <label for="form-password" class="col-12 colorLabel mt-4"
            >Password</label
          >
          <input
            v-model="formRegister.password"
            type="password"
            class="col-12 inputBorder pt-2 pb-2"
            id="form-password"
            placeholder="Password"
            minlength="8"
            required
          />
          <button type="submit" class="btn btn-info w-100 p-2 mt-5">
            <b-icon
              :icon="!isLoading ? 'person-plus-fill' : 'clock-history'"
              :animation="!isLoading ? 'fade' : 'spin'"
            />
            <span v-if="!isLoading"> Register</span>
            <span v-else> Loading</span>
          </button>
        </form>
        <div class="row justify-content-center">
          <div class="col-12 mt-4">
            <p class="text-center">
              Already have an account?
              <router-link to="/signin">Login</router-link>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import swalert from '../helpers/swalert'
export default {
  mixins: [swalert],
  data () {
    return {
      msgAlert: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      isLoading: false,
      formRegister: {
        username: '',
        password: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions({
      registerUser: 'registerUser'
    }),
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    register () {
      this.isLoading = true
      this.registerUser(this.formRegister).then((response) => {
        this.isLoading = false
        this.$router.push('/signin')
        this.alertModif('success', response.message)
      }).catch((error) => {
        this.isLoading = false
        this.msgAlert = error.data.message
        this.dismissCountDown = this.dismissSecs
      })
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
section.box-body {
  width: 35%;
  height: 530px;
  background: #fff;
  margin: 60px 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
@media (min-width: 768px) and (max-width: 991px) {
  section.box-body {
    width: 60%;
  }
}
@media (min-width: 577px) and (max-width: 767px) {
  section.box-body {
    width: 85%;
    font-size: 14px;
  }
}
@media (max-width: 576px) {
  section.box-body {
    width: 85%;
    font-size: 14px;
  }
}
</style>
