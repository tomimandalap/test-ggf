const biner = (input) => {
  // validasi inputan harus number
  if (typeof(input) === 'number') {
    const outBiner = input.toString(2)
    return `Input : ${input}, Output : ${outBiner}`
  } else {
    return 'Oops.., Input data harus number!'
  }
}
console.log(biner(12))
console.log(biner(29))