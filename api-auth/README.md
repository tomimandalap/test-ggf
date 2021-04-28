# REST API AUTH

Project membuat REST API Authentication serta validasi lokasi. Project ini mempunya fitur CRUD user dan authrbtucation menggunakan token dari JWT untuk mengakses beberapa Endpoint yang telah dibatasi aksesnya. Project ini dibangun menggunakan beberapa library sebagai berikut.

### Documentasi Postman
Project [API Auth](https://documenter.getpostman.com/view/13709551/TzK16uaY)

### Modules
1. [Expressjs](https://www.npmjs.com/package/express)
2. [MySql2](https://www.npmjs.com/package/mysql2)
3. [Dotenv](https://www.npmjs.com/package/dotenv)
4. [CORS](https://www.npmjs.com/package/cors)
5. [Body Parser](https://www.npmjs.com/package/body-parser)
6. [bcrypt](https://www.npmjs.com/package/bcrypt)
7. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) atau JWT
8. [multer](https://www.npmjs.com/package/multer)
9. [Nodemon](https://www.npmjs.com/package/nodemon)

---

[ini]: https://view.genial.ly/6016b1c223fd8e1022267712/learning-experience-challenges-presentation
[ESLint]: https://eslint.org/docs/user-guide/getting-started
[lodash]: https://www.npmjs.com/package/lodash
[disini]: https://lodash.com/docs/4.17.15
[cek disini]: https://github.com/tomimandalap/beginer_backend/tree/master


### Tatacara

1. Buka editor text seperti VSCode atau sejenisnya
2. Pastikan anda telah melakukan clone project ini! Jika belum silahkan ikuti cara berikut [ini](https://github.com/tomimandalap/test-ggf)
3. Pastikan import database yang ada didalam file ```MySql``` sebagai database di MySql
4. Silahkan ```CREATE``` file ```.env``` lalu buka file tersebut
5. Patikan isi ``` PORT ``` yang akan kamu gunakan di file ``` .env ``` sesuaikan juga dengan yang ada di ``` app.listen ``` pada file ``` index.js ```
6. Silahkan ganti nama database, user dan password pada file ``` .env ``` sesuai dengan MySql kalian. Umumnya seperti berikut:
```
DBHOST= localhost
DBUSER= root
DBPASS= *
DB    = nama_databasenya
PORT = 3003
keyJWT = xxxx
```
  
Untuk pengguna OS windows biasanya bagian passowd di xampp itu kosong, tetapi pengguna Mac silahakn isi passwordnya.

### Penggunaan

Silahkan buka terminal pada VS Code dengan menekan tombol
```
CTRL + SHIFT + `
atau
CTRL + SHIFT + C
```
Kemudian ketikan text berikut
```
"npm install"
"npm run start" //untuk menjalankan nodemon cek di file package.json
```
guna untuk menjalankan project ini. Pastikan anda telah mengaktifkan XAMPP

---
