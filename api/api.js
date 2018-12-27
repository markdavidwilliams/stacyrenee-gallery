const api = require('express').Router()

const images = require('./routes/images')
const videos = require('./routes/videos')
const about = require('./routes/about')
const exhibitions = require('./routes/exhibitions')
const press = require('../models/Press')

api.use('/images', images)
api.use('/videos', videos)
api.use('/about', about)
api.use('/exhibitions', exhibitions)
api.use('/press', press)

module.exports = api