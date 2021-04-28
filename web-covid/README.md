# Website Cov-19

Wesite cov-19 dirancang menggunakan freamwork VueJS dengan library penunjang seperti Vue2 Google Maps, Vuex, Vue Router, Bootstrap-vue, Axios dan Sweetaler2. Website ini didesain responsive untuk semua device dan memiliki fitur menampilkan data Covid-19 secara Global, Local untuk indonesia serta kita dapat melihat beberapa data Covid-19 dengan menginputkan nama negara dan tanggal (Minimal setting tanggal H-1 dari hari ini).

Deskripsi singkat mengenai pengolahan data pada website ini dipusatkan pada file ***background.js*** yang berada pada sistem **Vuex**. Lokasi file ini terletak didalam folder **src/store/modules**. Lalu untuk mengatur setting numerik/digit cukup memanggil **mixins** yang ada didalam methods dalam folder **src/helpers/digit.js**.

---

## Dependencies
- [Axios](https://www.npmjs.com/package/axios)
- [Vuex](https://www.npmjs.com/package/vuex)
- [Bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue)
- [Sweetalert2](https://www.npmjs.com/package/sweetalert2)
- [Vue2 Google Maps](https://www.npmjs.com/package/vue2-google-maps)

---

## Project setup
- Buka terminal/cmd pastikan sudah mengarahkan kedalam directory yang diinginkan.
- Silahkan lakukan clone project ini dengan cara berikut [ini](https://github.com/tomimandalap/test-ggf)
- lalu ketikan perintah cd **folder target** kemudian ketikan **code .** untuk membuka VSCOdenya.
- Kemudian buatlah file ```.env``` didalam direktory/folder **web-covid** lalu ketikan printah beribut ini.
```
VUE_APP_PRIVATE_URL=https://covid-api.com/api
VUE_APP_KEY= *kode token google maps anda!

note: sebagai bahan percobaan silahkan isi token maps ini 'AIzaSyCRPF7T8UmkIVPZHbHngBsXsdwb1DTfr9Y' tanpa tanda petik!
```
- Silahkan buka terminal pada VScode dengan cara tekan tombol
```
CTRL + ` 
atau
CTRL + SHIFT + C
```

- Kemudian lakukan install npm terlebih dahulu dengan membuat perintah seperti berikut
```
npm install atau npm i
```

- Jika sudah, maka untuk menjalankan silahkan ketikan perintah berikut ini
```
npm run serve
```

---

## Error CORS
Jika menemukan error Cors seperti **Gambar 1** silahkan download extension untuk Google Chrome [disini](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino). Error tersebut dikarena ada penolakan dari Backend dalam hal ini REST API Covidnya. Pastikan untuk menangani error tersebut silahkan install extension tersebut lalu aktifkan untuk memperbaiki error tersebut.

### Gambar 1
![Capture6](https://user-images.githubusercontent.com/43200304/116277366-9c665680-a7af-11eb-9149-72629c3ceadd.PNG)


## Tampilan UI/UX

### Gambar 2
![screencapture-localhost-8080-2021-04-27-23_16_22](https://user-images.githubusercontent.com/43200304/116277402-a2f4ce00-a7af-11eb-8135-36103b20cb13.png)

### Gambar 3
![screencapture-localhost-8080-2021-04-27-23_17_09](https://user-images.githubusercontent.com/43200304/116277393-a1c3a100-a7af-11eb-9f5f-054a6fae4188.png)


### Tampilan Mobile

![Capture1](https://user-images.githubusercontent.com/43200304/116277388-a12b0a80-a7af-11eb-80ca-ba9e5f31a888.PNG)
![Capture2](https://user-images.githubusercontent.com/43200304/116277386-a0927400-a7af-11eb-8e36-de63f3fce8dc.PNG)
![Capture3](https://user-images.githubusercontent.com/43200304/116277385-9ff9dd80-a7af-11eb-82f5-6a2eebd28e8b.PNG)
![Capture4](https://user-images.githubusercontent.com/43200304/116277382-9f614700-a7af-11eb-9740-6b477c1cd4ce.PNG)
![Capture5](https://user-images.githubusercontent.com/43200304/116277379-9ec8b080-a7af-11eb-8e1e-07f0598fe4ed.PNG)

---

### Link Demo
Silahkan kunjungi website ini dengan klik [cov-19](http://52.204.186.223:6060/)

---
