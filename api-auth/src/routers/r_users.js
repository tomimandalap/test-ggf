const { register, login, detailUser, allUser, updateUser, deleteUser, checkLocation } = require('../controllers/c_users')
const express = require('express')
const Routers = express.Router()

const { authentication } = require('../helpers/middleware/auth')
const singleUploadProject = require('../helpers/middleware/img')

Routers
  .post('/register', register)
  .post('/login', login)
  .get('/users/:id', authentication, detailUser)
  .get('/users', authentication, allUser)
  .patch('/update/:id', authentication, singleUploadProject, updateUser)
  .delete('/users/:id', authentication, deleteUser)
  .post('/location/:id', authentication, checkLocation)

module.exports = Routers