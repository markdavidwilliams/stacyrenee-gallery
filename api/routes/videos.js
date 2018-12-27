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
  let video = new Video()
  console.log("VIDEO BEFORE: ", video)
  console.log("REQ.BODY: ", req.body)
  video.title = req.body.title
  video.url = req.body.url
  video.video_date = req.body.video_date
  console.log("VIDEO AFTER: ", video)
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