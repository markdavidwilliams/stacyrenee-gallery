const server = require('express')()

const moduleConfig = require('./config/modules')
const mongoConfig = require('./config/mongo')
const cloudinaryConfig = require('./config/cloudinary')
const routeConfig = require('./config/routes')
const serveClient = require('./config/serveClient')

moduleConfig(server)
mongoConfig()
cloudinaryConfig()
routeConfig(server)
serveClient(server)

module.exports = { server }
