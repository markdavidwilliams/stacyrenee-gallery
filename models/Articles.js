const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticlesSchema = new Schema({
  title: String,
  author: String,
  author_title: String,
  publication: String,
  content: [{ paragraph: String }],
  date: String,
  added: { type: Date, default: Date.now() }
})

const Articles = mongoose.model('Article', ArticlesSchema)

module.exports = Articles