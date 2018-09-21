const routes = require('../api')

module.exports = server => {
  server.use('/api', routes)
}