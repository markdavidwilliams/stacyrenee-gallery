const api = require('express').Router()
const images = require('./routes/images')

api.use('/images', images)

module.exports = api