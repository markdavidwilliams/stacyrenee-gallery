const imgLanding = require('express').Router()

const Image = require('../../models/Images')

imgLanding.get('/', (req, res) => {
  Image.find({ landing: true }, (err, img) => {
    if (err) {
      res.json(err)
    } else {
      res.json(img)
    }
  })
})

module.exports = imgLanding