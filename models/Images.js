const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImagesSchema = new Schema({
  url: String,
  title: String,
  year: Number,
  landing: { type: Boolean, default: false },
  about: { type: Boolean, default: false },
  gallery: { type: Boolean, default: false },
  added: { type: Date, default: Date.now }
})

const Images = mongoose.model('Image', ImagesSchema)

module.exports = Images