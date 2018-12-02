const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = server => {
  require('dotenv').config()
  server.use(helmet())
  server.use(cors())
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
}