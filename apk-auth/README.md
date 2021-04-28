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

![Capture1](https://user-images.githubusercontent.com/43200304/116485197-c81f3480-a8b4-11eb-9b45-14c712f43b7a.PNG)

![Capture2](https://user-images.githubusercontent.com/43200304/116485194-c7869e00-a8b4-11eb-8ebd-c8336ffbbdb9.PNG)
![Capture3](https://user-images.githubusercontent.com/43200304/116485192-c6ee0780-a8b4-11eb-9ab2-6b502af5dca2.PNG)
![Capture4](https://user-images.githubusercontent.com/43200304/116485190-c6557100-a8b4-11eb-9010-41392dc4430b.PNG)
![Capture5](https://user-images.githubusercontent.com/43200304/116485189-c5bcda80-a8b4-11eb-860b-123e85eddf0a.PNG)
![Capture6](https://user-images.githubusercontent.com/43200304/116485187-c5244400-a8b4-11eb-8719-f2cf5d675576.PNG)
![Capture7](https://user-images.githubusercontent.com/43200304/116485184-c48bad80-a8b4-11eb-99d9-58a6fb56cbf1.PNG)
![Capture8](https://user-images.githubusercontent.com/43200304/116485183-c3f31700-a8b4-11eb-8af3-eca23f38f117.PNG)
![Capture9](https://user-images.githubusercontent.com/43200304/116485181-c35a8080-a8b4-11eb-8301-13021f390adb.PNG)
![Capture10](https://user-images.githubusercontent.com/43200304/116485179-c35a8080-a8b4-11eb-83cd-a2913a6bdb6d.PNG)
![Capture11](https://user-images.githubusercontent.com/43200304/116485178-c2c1ea00-a8b4-11eb-80c9-1406e44cbe7a.PNG)
![Capture12](https://user-images.githubusercontent.com/43200304/116485177-c2295380-a8b4-11eb-931c-d2a52d79144d.PNG)
![Capture13](https://user-images.githubusercontent.com/43200304/116485175-c190bd00-a8b4-11eb-9a1e-2c480f6db7eb.PNG)
![Capture14](https://user-images.githubusercontent.com/43200304/116485174-c0f82680-a8b4-11eb-9365-d9ab2057ab66.PNG)
![Capture15](https://user-images.githubusercontent.com/43200304/116485171-c05f9000-a8b4-11eb-8449-ba6faab109bd.PNG)
![Capture16](https://user-images.githubusercontent.com/43200304/116485170-bfc6f980-a8b4-11eb-873f-8e00cf6e0a58.PNG)
![Capture17](https://user-images.githubusercontent.com/43200304/116485167-bdfd3600-a8b4-11eb-98eb-fc4ff20d79cd.PNG)

---
