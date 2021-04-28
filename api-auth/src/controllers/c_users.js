const { modelCheckUsername, modelRegister, modelDetailUser, modelGetAllUser, modelTotal, modelUpdateUser, modelDeleteUser, modelCekLocation } = require('../models/m_users')
const { success, badreques, failed, nocontent } = require('../helpers/response')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { envJWTSECRET } = require('../helpers/env')
const fs = require('fs')
module.exports = {
  register: (req, res) => {
    const body = req.body
    modelCheckUsername(body.username).then(async(response) => {
      if (response.length >= 1) {
        badreques(res, 'Username has registered!', null)
      } else {
        const salt = await bcrypt.genSalt(10)
        const pass = await bcrypt.hash(body.password, salt)
        const data = { username: body.username, password: pass }
        modelRegister(data).then((response) => {
          success(res, 'Register success', {}, {})
        }).catch((error) => {
          failed(res, 'Internal server error!', null || error.message)
        })
      }
    }).catch((error) => {
      failed(res, 'Internal server error!', null || error.message)
    })
  },
  login: (req, res) => {
    const body = req.body
    modelCheckUsername(body.username).then(async(response) => {
      if (response.length === 1) {
        const check = await bcrypt.compare(body.password, response[0].password)
        if (check) {
          const newData = {
            id: response[0].id,
            username: response[0].username,
          }
          // token
          const token = jwt.sign(newData, envJWTSECRET)
          const createData = {
            id: response[0].id,
            username: response[0].username,
            token
          }
          success(res, 'Login success!', {}, createData)
        } else {
          badreques(res, 'Wrong password!', null)
        }
      } else {
        badreques(res, 'Username not found!', null)
      }
    }).catch((error) => {
      failed(res, 'Internal server error!', null || error.message)
    })
  },
  detailUser: (req, res) => {
    const id = req.params.id
    modelDetailUser(id).then((response) => {
      if (response.length > 0) {
        const data = {
          id: response[0].id,
          username: response[0].username,
          image: response[0].image,
          lat: response[0].lat,
          longi: response[0].longi,
          status: response[0].status,
          create_at: response[0].create_at,
          updatetime: response[0].updatetime
        }
        success(res, 'Detail success', {}, data)
      } else {
        nocontent(res, 'No content', null)
      }
    }).catch((error) => {
      failed(res, 'Internal server error!', null || error.message)
    })
  },
  allUser: async(req, res) => {
    try {
      // searching user
      const key = req.query.key ? req.query.key : 'username'
      const search = req.query.search ? req.query.search : ``
      const searching = search ? `WHERE ${key.toString().toLowerCase()} LIKE '%${search.toString().toLowerCase()}%'` : ``
      // sort user
      const sort = req.query.sort ? req.query.sort : ``
      const order = req.query.order ? req.query.order : 'asc'
      const sorting = sort ? `ORDER BY ${sort} ${order.toString().toLowerCase()}` : ``
      // page&limit
      const page = req.query.page ? req.query.page : 1
      const limit = req.query.limit ? req.query.limit : 10
      const start = page === 1 ? 0 : (page-1)*limit
      const pages = page ? `LIMIT ${start}, ${limit}` : ``
      // total page users
      const totalPage = await modelTotal(searching)
      modelGetAllUser(searching, sorting, pages).then((response) => {
        if (response.length > 0) {
          const pagination = {
            page: page,
            limit: limit,
            totalData: totalPage[0].total,
            totalPage: Math.ceil(totalPage[0].total/limit)
          }
          success(res, 'Get all data', pagination, response)
        } else {
          success(res, 'Data not found!', {}, null)
        }
      }).catch((error) => {
        failed(res, 'Internal server error!', null || error.message)
      })
    } catch (error) {
      failed(res, 'Internal server error!', null || error.message)
    }
  },
  updateUser: async(req, res) => {
    try {
      const body = req.body
      const id = req.params.id
      const detail = await modelDetailUser(id)
      if (req.file) {
        if (detail[0].image === "profile.png") {
          body.image = req.file.filename
          modelUpdateUser(body, id).then((response) => {
            success(res, 'Update profile sucess!', {}, null)
          }).catch((error) => {
            failed(res, 'Internal server error!', null || error.message)
          })
        } else {
          body.image = req.file.filename
          const path = `./public/images/${detail[0].image}`;
          if (fs.existsSync(path)) {
            fs.unlinkSync(path);
          }
          modelUpdateUser(body, id).then((response) => {
            success(res, 'Update profile success', {}, null)
          }).catch((error) => {
            failed(res, 'Internal server error!', null || error.message)
          })
        }
      } else {
        if (body.password) {
          const data = await modelDetailUser(id)
          const check = await bcrypt.compare(body.password, data[0].password)
          if (check) {
            const newLoction = {
              longi: body.longi,
              lat: body.lat,
              update_at: body.update_at
            } 
            modelUpdateUser(newLoction, id).then((response) => {
              success(res, 'Update location success!', {}, null)
            }).catch((error) => {
              failed(res, 'Internal server error!', null || error.message)
            })
          } else {
            badreques(res, 'Wrong password!', null)
          }
        } else {
          modelUpdateUser(body, id).then((response) => {
            success(res, 'Update success!', {}, null)
          }).catch((error) => {
            failed(res, 'Internal server error!', null || error.message)
          })
        }
      }
    } catch (error) {
      failed(res, 'Internal server error!', null || error.message)
    }
  },
  deleteUser: async(req, res) => {
    try {
      const id = req.params.id
      const callDetail = await modelDetailUser(id)
      modelDeleteUser(id).then((response) => {
        if (response.affectedRows) {
          // select image profile
          if (callDetail[0].image === "profile.png") {
            success(res, 'Delete success!', {}, null)
          } else {
            const locationPath = `./public/images/${callDetail[0].image}`
            fs.unlinkSync(locationPath)
            success(res, 'Delete success.', {}, null)
          }
        } else {
          nocontent(res, 'No content', null)
        }
      }).catch((error) => {
        failed(res, 'Internal server error!', error.message)
      })
    } catch (error) {
      failed(res, 'Internal server error!', null || error.message)
    }
  },
  checkLocation: (req, res) => {
    const id = req.params.id
    const body = req.body
    modelCekLocation(id, body.lat, body.longi).then((response) => {
      if(response.length) {
        const data = {
          status: 1
        }
        modelUpdateUser(data, id).then((response) => {
          success(res, 'Cek in success!', {}, true)
        }).catch((error) => {
          failed(res, 'Internal server error!', null || error.message)
        })
      } else {
        const data = {
          status: 0
        }
        modelUpdateUser(data, id).then((response) => {
          success(res, 'Cek in failed!', {}, false)
        }).catch((error) => {
          failed(res, 'Internal server error!', null || error.message)
        })
      }
    }).catch((error) => {
      failed(res, 'Internal server error!', null || error.message)
    })
  }
}