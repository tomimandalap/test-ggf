const multer = require('multer')
const path = require('path')
const limitFile = 1 // Megabyte

const { failed, badreques } = require('../response')

// setting diskStorage
const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `./public/images`)
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}${path.extname(file.originalname)}`) // ext originalname => img.png/img.jpg
  }
})

// setting conneting multer with storage
const multerUploadImg = multer({
  storage: multerStorage,
  limits: {
    fileSize: limitFile * 1024 * 1024 // MegaByte(s)
  },
  // custom extension
  fileFilter: (req, file, callback) => {
    const typeExt = path.extname(file.originalname)
    if(typeExt === '.jpg' || typeExt === '.JPG' || typeExt === '.png' || typeExt === '.PNG') {
      callback(null, true)
    } else {
      callback({
        error: 'Wrong type extention!',
        code: 'typeExtWrong'
      }, false)
    }
  }
})

// make middleware
const singleUploadProject = (req, res, next) => {
  // process upload
  const multerSingle = multerUploadImg.single('image') // name file 
  if(multerSingle) {
    multerSingle(req, res, (error) => {
      if (error) {
        // console.log(error.message)
        if (error.code === 'LIMIT_FILE_SIZE') {
          return badreques(res, `File size exceeds the ${limitFile} Mb limit`, [])
        } else if(error.code === 'typeExtWrong') {
          return badreques(res, 'Wrong type extention!', [])
        } else {
          return failed(res, 'Internal server error!', [])
        }
      } else {
        next()
      }
    })
  } else {
    next()
  }
}
module.exports = singleUploadProject
