const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaintingsSchema = new Schema({
  url: String,
  title: String,
  year: Number,
  added: { type: Date, default: Date.now }
})

const Paintings = mongoose.model('Painting', PaintingsSchema)

module.exports = Paintings