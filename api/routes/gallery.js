const gallery = require('express').Router()
const multer = require('multer')
const fs = require('fs')
const cloudinary = require('cloudinary')
const os = require('os')

const Painting = require('../../models/Painting')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})


gallery.get('/', (req, res) => {
  Painting.find({}, (err, paintings) => {
    res.json(paintings)
  })
})

gallery.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    res.send('no file')
  } else {
    console.log(os.tmpdir())
    const ext = req.file.originalname.split('.')[1]
    const tmp = os.tmpdir() + '/deleteme.' + ext
    fs.writeFileSync(tmp, req.file.buffer)
    cloudinary.v2.uploader.upload(tmp, { public_id: `stacyrenee/${Date.now()}`}, (error, result) => {
      const painting = new Painting()
      painting.url = result.secure_url
      painting
        .save()
        .then(data => {
          Painting.findById(data, (err, metaRef) => {
            console.log(metaRef)
            res.json(metaRef)
          })
        })
    })
  }
})

module.exports = gallery