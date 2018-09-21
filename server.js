const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const routeConfig = require('./config/routes')

const server = express()

server.use(helmet())
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(path.resolve(__dirname, 'client', 'build')))

routeConfig(server)

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

module.exports = { server }
