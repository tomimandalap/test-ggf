import Swal from 'sweetalert2'
const mixins = {
  data () {
    return {
      Toast: Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    }
  },
  methods: {
    alertModif (ico, title) {
      this.Toast.fire({
        icon: ico,
        title: title
      })
    },
    alertPopUp (ico, title, info) {
      Swal.fire({
        icon: ico,
        title: title,
        text: info
      })
    },
    swalLoading (title) {
      Swal.fire({
        title: title,
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        }
      })
    },
    swalLoadingClose () {
      Swal.close()
    }
  }
}
export default mixins
