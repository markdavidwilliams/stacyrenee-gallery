const imagesRouter = require('express').Router()
const multer = require('multer')
const fs = require('fs')
const cloudinary = require('cloudinary')
const os = require('os')

const Image = require('../../models/Images')

const storage = multer.memoryStorage()
const upload = multer({ storage })

imagesRouter.get('/', (req, res) => {
  Image.find({}, (err, img) => {
    if (err) {
      res.json(err)
    } else {
      res.json(img)
    }
  })
})

imagesRouter.get('/:id', (req, res) => {
  Image.findById(req.params.id, (err, img) => {
    if (err) {
      res.json(err)
    } else {
      res.json(img)
    }
  })
})

imagesRouter.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    res.send('no file')
  } else {
    console.log(os.tmpdir())
    const ext = req.file.originalname.split('.')[1]
    const tmp = os.tmpdir() + '/deleteme.' + ext
    fs.writeFileSync(tmp, req.file.buffer)
    cloudinary.v2.uploader.upload(tmp, { public_id: `stacyrenee/${Date.now()}`}, (error, result) => {
      const image = new Image()
      image.url = result.secure_url
      image.title = req.body.title
      image.year = Number(req.body.year)
      image.landing = req.body.landing === 'true' ? true : false
      image.gallery = req.body.gallery === 'true' ? true : false
      image.about = req.body.about === 'true' ? true : false
      image
        .save()
        .then((err, img) => {
          if (err) {
            res.json(err)
          } else {
            res.json(img)
          }
        })
    })
  }
})

imagesRouter.put('/:id', (req, res) => {
  Image.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true }, (err, img) => {
    if (err) {
      res.json(err)
    } else {
      res.json(img)
    }
  })
})

imagesRouter.delete('/:id', (req, res) => {
  Image.findByIdAndDelete(req.params.id, (err, img) => {
    if (err) {
      res.json(err)
    } else {
      res.json(img)
    }
  })
})

module.exports = imagesRouter