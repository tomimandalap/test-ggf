const { envDBHOST, envDBUSER, envDBPASS, envDB } = require('../helpers/env')
const mysql = require('mysql2')

const conn = mysql.createConnection ({
  host: envDBHOST,
  user: envDBUSER,
  password: envDBPASS,
  database: envDB,
  waitForConnections: true
})

module.exports = conn