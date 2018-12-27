const api = require('express').Router()

const images = require('./routes/images')
const videos = require('./routes/videos')
const about = require('./routes/about')

api.use('/images', images)
api.use('/videos', videos)
api.use('/about', about)

module.exports = api