const conn = require('../config/db')

module.exports = {
  modelCheckUsername: (username) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_users WHERE username='${username}'`, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  modelRegister: (data) => {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_users SET ?`, data, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  modelDetailUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_users WHERE id='${id}'`, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  modelGetAllUser: (searching, sorting, pages) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM tb_users ${searching} ${sorting} ${pages}`, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  modelTotal: (searching) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT COUNT (*) as total FROM tb_users ${searching}`, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  modelUpdateUser: (data, id) => {
    return new Promise ((resolve, reject) => {
      conn.query(`UPDATE tb_users SET ? WHERE id = ?`, [data, id], (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  modelDeleteUser: (id) => {
    return new Promise ((resolve, reject) => {
      conn.query(`DELETE FROM tb_users WHERE id='${id}'`, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  modelCekLocation: (id, lat, longi) => {
    return new Promise ((resolve, reject) => {
      conn.query(`SELECT * FROM tb_users WHERE id='${id}' AND lat LIKE '%${lat}%' AND longi LIKE '%${longi}%'`, (error, result) => {
        if(!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}