const about = require('express').Router()

const Paragraphs = require('../../models/AboutParagraphs')

about.get('/', (req, res) => {
  Paragraphs.find({}, (err, paragraphs) => {
    if (err) {
      res.json(err)
    } else {
      res.json(paragraphs)
    }
  })
})

about.get('/:id', (req, res) => {
  Paragraphs.findById(req.body._id, (err, paragraph) => {
    if (err) {
      res.json(err)
    } else {
      res.json(paragraph)
    }
  })
})

about.post('/', (req, res) => {
  const paragraph = new Paragraphs()
  paragraph = { ...req.body }
  paragraph
    .save()
    .then((err, paragraph) => {
      if (err) {
        res.json(err)
      } else {
        res.json(paragraph)
      }
    })
})

about.delete('/:id', (req, res) => {
  Paragraphs.findByIdAndDelete(req.body._id, (err, paragraph) => {
    if (err) {
      res.json(err)
    } else {
      res.json(paragraph)
    }
  })
})

module.exports = about