const videos = require('express').Router()

const Video = require('../../models/Videos')

videos.get('/', (req, res) => {
  Video.find({}, (err, videos) => {
    if (err) {
      res.json(err)
    } else {
      res.json(videos)
    }
  })
})

videos.get('/:id', (req, res) => {
  Video.findById(req.params.id, (err, video) => {
    if (err) {
      res.json(err)
    } else {
      res.json(video)
    }
  })
})

videos.post('/', (req, res) => {
  const video = new Video()
  video = { ...req.body }
  video
    .save()
    .then((err, video) => {
      if (err) {
        res.json(err)
      } else {
        res.json(video)
      }
    })
})

videos.put('/:id', (req, res) => {
  Video.findByIdAndUpdate(req.params.id, { ...req.body }, {new: true}, (err, video) => {
    if (err) {
      res.json(err)
    } else {
      res.json(video)
    }
  })
})

videos.delete('/:id', (req, res) => {
  Video.findByIdAndDelete(req.params.id, (err, video) => {
    if (err) {
      res.json(err)
    } else {
      res.json(video)
    }
  })
})

module.exports = videos