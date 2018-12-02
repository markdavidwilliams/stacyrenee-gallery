const api = require('express').Router()
const gallery = require('./routes/gallery')

api.use('/gallery', gallery)

module.exports = api