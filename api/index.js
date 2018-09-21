const api = require('express').Router()
const gallery = require('./gallery')

api.use('/gallery', gallery)

module.exports = api