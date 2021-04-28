# apk-auth

Aplikasi web cek lokasi realtime yang memiliki fitur authentication berdasarkan token yang tersimpan pada localstorage saat user login. Aplikasi ini memiliki private rooter, sehingga user wajib login untk mengakses halaman home dan location. Jika user belum login akan diarahkan ke halaman login akan tetapi apabila user telah login akan diarahkan ke halaman utama (home). 

Aplikasi web dibangun menggunakan freamwork VueJS dan library axios, vuex, vuerooter, sweetalert2 dan bootstrap-vue. Sistem kerja dari aplikasi ini digunakan untuk melakukan cek lokasi yang sebelumnya telah ditentukan posisi melalui fitur update lokasii, serta aplikasi ini mempunyai fitur update foto profile. Untuk pengolahan data dipusatkan menggunakan vuex.

---

### Project Setup

- Buka terminal/cmd pastikan sudah mengarahkan kedalam directory yang diinginkan.
- Silahkan lakukan clone project ini dengan cara berikut [ini](https://github.com/tomimandalap/test-ggf)
- lalu ketikan perintah cd **folder target** kemudian ketikan **code .** untuk membuka VSCOdenya.
- Kemudian buatlah file ```.env``` didalam direktory/folder **apk-auth** lalu ketikan printah beribut ini.
```
VUE_APP_URL=http://localhost:3003/v1/api
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

## Tampilan UI/UX



---
