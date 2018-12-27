const exhibitions = require('express').Router()

const Exhibitions = require('../../models/Exhibitions')

exhibitions.get('/', (req, res) => {
  Exhibitions.find({}, (err, exhibitions) => {
    if (err) {
      res.json(err)
    } else {
      res.json(exhibitions)
    }
  })
})

exhibitions.get('/:id', (req, res) => {
  Exhibitions.findById(req.params.id, (err, exhibition) => {
    if (err) {
      res.json(err)
    } else {
      res.json(exhibition)
    }
  })
})

exhibitions.post('/', (req, res) => {
  const exhibition = new Exhibitions()
  exhibition.year = Number(req.body.year)
  exhibition.content = [ ...req.body.content ]
  exhibition
    .save()
    .then((err, exhibition) => {
      if (err) {
        res.json(err)
      } else {
        res.json(exhibition)
      }
    })
})

exhibitions.put('/:id', (req, res) => {
  Exhibitions.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true }, (err, exhibition) => {
    if (err) {
      res.json(err)
    } else {
      res.json(exhibition)
    }
  })
})

exhibitions.delete('/:id', (req, res) => {
  Exhibitions.findByIdAndDelete(req.params.id, (err, exhibition) => {
    if (err) {
      res.json(err)
    } else {
      res.json(exhibition)
    }
  })
})

module.exports = exhibitions