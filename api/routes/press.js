const press = require('express').Router()

const Press = require('../../models/Press')

press.get('/', (req, res) => {
  Press.find({}, (err, press) => {
    if (err) {
      res.json(err)
    } else {
      res.json(press)
    }
  })
})

press.get('/:id', (req, res) => {
  Press.findById(req.params.id, (err, press) => {
    if (err) {
      res.json(err)
    } else {
      res.json(press)
    }
  })
})

press.post('/', (req, res) => {
  const press = new Press()
  press = { ...req.body }
  press
    .save()
    .then((err, press) => {
      if (err) {
        res.json(err)
      } else {
        res.json(press)
      }
    })
})

press.put('/:id', (req, res) => {
  Press.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true }, (err, press) => {
    if (err) {
      res.json(err)
    } else {
      res.json(press)
    }
  })
})

press.delete('/:id', (req, res) => {
  Press.findByIdAndDelete(req.params.id, (err, press) => {
    if (err) {
      res.json(err)
    } else {
      res.json(press)
    }
  })
})

module.exports = press