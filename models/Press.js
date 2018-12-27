const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PressSchema = new Schema({
  title: String,
  author: String,
  author_title: String,
  publication: String,
  content: [{ paragraph: String }],
  date: String
})

const Press = mongoose.model('Pres', PressSchema)

module.exports = Press