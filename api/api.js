const api = require('express').Router()

const images = require('./routes/images')
const videos = require('./routes/videos')
const about = require('./routes/about')
const exhibitions = require('./routes/exhibitions')

api.use('/images', images)
api.use('/videos', videos)
api.use('/about', about)
api.use('/exhibitions', exhibitions)

module.exports = api