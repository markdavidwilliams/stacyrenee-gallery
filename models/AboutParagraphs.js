const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParagraphsSchema = new Schema({
  order: Number,
  text: String,
  added: { type: Date, default: Date.now }
})

const Paragraphs = mongoose.model('Paragraph', ParagraphsSchema)

module.exports = Paragraphs