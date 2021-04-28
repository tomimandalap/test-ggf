module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
    headers: {
      'Access-Control-Allow-Origin': `*`,
      'Access-Control-Allow-Methods': `GET, POST, PATCH, PUT, DELETE, OPTIONS`,
      'Access-Control-Allow-Headers': `Origin, Content-Type, X-Auth-Token, Authorization, Accept, charset, boundary, Content-Length`,
      'Content-Type': `application/json`
    }
  }
}