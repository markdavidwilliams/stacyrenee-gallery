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
  Paragraphs.findById(req.params.id, (err, paragraph) => {
    if (err) {
      res.json(err)
    } else {
      res.json(paragraph)
    }
  })
})

about.post('/', (req, res) => {
  const paragraph = new Paragraphs()
  paragraph.order = Number(req.body.order)
  paragraph.text = req.body.text
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

about.put('/:id', (req, res) => {
  Paragraphs.findByIdAndUpdate(req.params.id, { ...req.body }, {new: true}, (err, paragraph) => {
    if (err) {
      res.json(err)
    } else {
      res.json(paragraph)
    }
  })
})

about.delete('/:id', (req, res) => {
  Paragraphs.findByIdAndDelete(req.params.id, (err, paragraph) => {
    if (err) {
      res.json(err)
    } else {
      res.json(paragraph)
    }
  })
})

module.exports = about