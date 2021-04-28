const digit = {
  data: () => ({
  }),
  methods: {
    setDigit (number) {
      return number.toLocaleString('id').split(',').join('.')
    },
    setToNumber (string) {
      return parseInt(string)
    }
  }
}

export default digit
