const factorial = (n) => {
  // validasi inputan harus number
  if (typeof(n) === 'number') {
    if (n < 0) { // validasi inputan berupa bilangan positif
      return 'Error! Input bilangan faktorial harus bilangan positif.'
    } else if (n == 0) { // validasi inputan tidak boleh angka 0 (nol)
      return 'Error! Input bilangan faktorial tidak boleh angka 0 (nol).'
    } else {
      let hasil = 1 // set nilai awal yaitu 1 (satu)
      for (let i=1; i<=n; i++) {
        hasil *= i // rumus untuk menghasilkan nilai faktorial ke -n dengan perulangan for
      }
      return `Input : ${n}, Output : ${hasil}`
    }
  } else {
    return 'Oops.., Input data harus number!'
  }
}
console.log(factorial(4))
console.log(factorial(7))