module.exports = {
  success: (res, message, pagination, data) => {
    const response = {
      code: 200,
      message,
      pagination,
      data
    }
    res.status(200).json(response)
  },
  badreques: (res, message, data) => {
    const response = {
      code: 400,
      message,
      data
    }
    res.status(400).json(response)
  },
  nocontent: (res, message, data) => {
    const response = {
      code: 204,
      message,
      data
    }
    res.status(204).json(response)
  },
  unauthorized: (res, message, data) => {
    const response = {
      code: 401,
      message,
      data
    }
    res.status(401).json(response)
  },
  failed: (res, message, data) => {
    const response = {
      code: 500,
      message,
      data
    }
    res.status(500).json(response)
  }
}