const press = require('express').Router()

const Articles = require('../../models/Articles')

press.get('/', (req, res) => {
  Articles.find({}, (err, articles) => {
    if (err) {
      res.json(err)
    } else {
      res.json(articles)
    }
  })
})

press.get('/:id', (req, res) => {
  Articles.findById(req.params.id, (err, article) => {
    if (err) {
      res.json(err)
    } else {
      res.json(article)
    }
  })
})

press.post('/', (req, res) => {
  const article = new Articles()
  article.title = req.body.title
  article.author = req.body.author
  article.author_title = req.body.author_title
  article.publication = req.body.publication
  article.content = [ ...req.body.content ]
  article.date = req.body.date
  article
    .save()
    .then((err, article) => {
      if (err) {
        res.json(err)
      } else {
        res.json(article)
      }
    })
})

press.put('/:id', (req, res) => {
  Articles.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true }, (err, article) => {
    if (err) {
      res.json(err)
    } else {
      res.json(article)
    }
  })
})

press.delete('/:id', (req, res) => {
  Articles.findByIdAndDelete(req.params.id, (err, article) => {
    if (err) {
      res.json(err)
    } else {
      res.json(article)
    }
  })
})

module.exports = press