const { unauthorized } = require('../response')
const { envJWTSECRET } = require('../env')
const jwt = require('jsonwebtoken')
module.exports = {
  authentication: (req, res, next) => {
    const headers = req.headers
    if (!headers.token) {
      unauthorized(res, 'Authentication failed!', null)
    } else {
      jwt.verify(headers.token, envJWTSECRET, (error, decoded) => {
        if (!error) {
          // res.useraccess = decoded.access
          next()
        } else {
          unauthorized(res, 'Token not valid!', null)
        }
      })
    }
  }
}