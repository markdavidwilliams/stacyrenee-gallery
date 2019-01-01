const api = require('express').Router()

const images = require('./routes/images')
const videos = require('./routes/videos')
const about = require('./routes/about')
const exhibitions = require('./routes/exhibitions')
const press = require('./routes/press')
const imgGallery = require('./routes/imgGallery')
const imgLanding = require('./routes/imgLanding')
const imgAbout = require('./routes/imgAbout')

api.use('/images', images)
api.use('/videos', videos)
api.use('/about', about)
api.use('/exhibitions', exhibitions)
api.use('/press', press)
api.use('/gallery', imgGallery)
api.use('/landing', imgLanding)
api.use('/img-about', imgAbout)

module.exports = api