const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {envPORT} = require('./src/helpers/env')
const routerUsers = require('./src/routers/r_users')
const app = express()

// parse request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Set default
app.get("/v1/api", (req, res) => {
  res.json({
    message: "Welcome to Project CRUD REST API Auth"
  })
})

// ROUTE
app.use('/v1/api',routerUsers)

// Set for check image
app.use('/v1/api/image', express.static('./public/images'))

// server
app.listen( envPORT || 3003, cors(),  () => {
  console.log(`Server is running on http://localhost:${envPORT || 3003}`)
})