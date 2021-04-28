<template>
  <div class="detail">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5 text-center">
          <h1 class="font-weight-bold c-secondary">Info Details</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
            consectetur!
          </p>
        </div>
      </div>
      <div v-if="isLoading" class="row">
        <div class="col-12 text-center mb-5">
          <b-spinner variant="primary" label="Text Centered"></b-spinner>
        </div>
      </div>
      <div v-else>
        <form @submit.prevent="submitPrevent">
          <div class="form-row">
            <div class="form-group col-md-4 col-sm-12 col-12">
              <select
                v-model="form.sort"
                class="form-control p-2"
                size="1"
                aria-label="size 3 select example"
                required
              >
                <option value="">Select Regional</option>
                <option
                  v-for="(item, i) in getRegion"
                  :key="i"
                  :value="{ iso: item.iso, name: item.name }"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-4 col-sm-12 col-12">
              <b-input-group class="mb-3">
                <b-form-input
                  id="example-input"
                  v-model="form.date"
                  type="text"
                  placeholder="Sort by date"
                  autocomplete="off"
                  class="form-control"
                  required
                ></b-form-input>
                <b-input-group-append>
                  <b-form-datepicker
                    v-model="form.date"
                    button-only
                    right
                    locale="en-US"
                    aria-controls="example-input"
                    required
                  ></b-form-datepicker>
                </b-input-group-append>
              </b-input-group>
            </div>
            <div class="col-md-4 col-sm-12 d-none d-sm-block">
              <button class="btn btn-success w-100">Request</button>
            </div>
            <div class="col-md-4 col-sm-12 d-block d-sm-none">
              <button class="btn btn-success w-100 mb-5">Request</button>
            </div>
          </div>
        </form>
        <div v-if="!getDataDetails.length" class="row text-center mb-5">
          <div class="col-12">
            <i class="fas fa-folder f-xl mb-3"></i>
            <h4 class="font-weight-bold d-none d-sm-block">
              Data not found! Please request data.
            </h4>
            <h5 class="font-weight-bold d-block d-sm-none">
              Data not found! Please request data.
            </h5>
          </div>
        </div>
        <div v-else class="row mb-5">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Confirmed_diff</th>
                  <th scope="col">Active</th>
                  <th scope="col">Active_diff</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Recovered_diff</th>
                  <th scope="col">Deaths</th>
                  <th scope="col">Deaths_diff</th>
                  <th scope="col">Fatality</th>
                </tr>
              </thead>
              <tbody v-for="(item, i) in getDataDetails" :key="i">
                <tr>
                  <th scope="row">{{ item.confirmed }}</th>
                  <td>{{ item.confirmed_diff }}</td>
                  <td>{{ item.active }}</td>
                  <td>{{ item.active_diff }}</td>
                  <td>{{ item.recovered }}</td>
                  <td>{{ item.recovered_diff }}</td>
                  <td>{{ item.deaths }}</td>
                  <td>{{ item.deaths_diff }}</td>
                  <td>{{ item.fatality_rate }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    isLoading: false,
    form: {
      sort: '',
      date: ''
    }
  }),
  computed: {
    ...mapGetters({
      getRegion: 'data/getRegion',
      getDataDetails: 'data/getDataDetails'
    })
  },
  methods: {
    ...mapActions({
      getListRegion: 'data/getListRegion',
      getReports: 'data/getReports'
    }),
    submitPrevent () {
      this.isLoading = true
      this.getReports(this.form)
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  },
  mounted () {
    this.isLoading = true
    this.getListRegion()
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>
