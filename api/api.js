const api = require('express').Router()

const images = require('./routes/images')
const videos = require('./routes/videos')

api.use('/images', images)
api.use('/videos', videos)

module.exports = api