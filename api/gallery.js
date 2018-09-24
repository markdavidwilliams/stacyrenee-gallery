const gallery = require('express').Router()
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
const cloudinary = require('cloudinary')

const upload = multer()

require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db')
  })
  .catch(err => console.log(err))

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const Schema = mongoose.Schema

const RefSchema = new Schema({
  url: String,
  added: { type: Date, default: Date.now }
})

const Ref = mongoose.model('Ref', RefSchema)

gallery.get('/', (req, res) => {
  Ref.find({}, (err, imgRefs) => {
    res.json(imgRefs)
  })
})

gallery.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    res.send('no file')
  } else {
    console.log(req.file)
    fs.writeFileSync(process.env.UPLOAD_DIR, req.file.buffer)
    cloudinary.v2.uploader.upload(process.env.UPLOAD_DIR, { public_id: `stacyrenee/${Date.now()}`}, (error, result) => {
      const imgRef = new Ref()
      imgRef.url = result.secure_url
      imgRef
        .save()
        .then(data => {
          Ref.findById(data, (err, metaRef) => {
            console.log(metaRef)
            res.json(metaRef)
          })
        })
    })
  }
})

module.exports = gallery