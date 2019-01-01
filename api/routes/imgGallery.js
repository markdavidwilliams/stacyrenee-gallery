const imgGallery = require('express').Router()

const Image = require('../../models/Images')

imgGallery.get('/', (req, res) => {
  Image.find({ gallery: true }, (err, img) => {
    if (err) {
      res.json(err)
    } else {
      res.json(img)
    }
  })
})

module.exports = imgGallery