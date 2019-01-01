const imgAbout = require('express').Router()

const Image = require('../../models/Images')

imgAbout.get('/', (req, res) => {
  Image.find({ about: true }, (err, img) => {
    if (err) {
      res.json(err)
    } else {
      res.json(img)
    }
  })
})

module.exports = imgAbout