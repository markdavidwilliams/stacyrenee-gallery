const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExhibitionsSchema = new Schema({
  year: Number,
  content: [{ month: String, date: Number, text: String}],
  added: { type: Date, default: Date.now }
})

const Exhibitions = mongoose.model('Exhibition', ExhibitionsSchema)

module.exports = Exhibitions