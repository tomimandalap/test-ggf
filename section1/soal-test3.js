const convert = (text) => {
  // deklarasi variabel
  var penjumlahan = 0, count = text.length
  // validasi input harus string
  if (typeof text === 'string') {
    for (let i=0; i<count; i++) {
      penjumlahan += parseInt(text[i], 36) - 9
    }
    return `Input : ${text}, Output : ${penjumlahan}`
  } else {
    return 'Oops.., Input data harus string!'
  }
}

console.log(convert('pagi'))
console.log(convert('SIANG'))
console.log(convert('Malam'))