const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImgRefSchema = new Schema({
  url: String,
  added: { type: Date, default: Date.now }
})

const ImgRef = mongoose.model('Ref', ImgRefSchema)

module.exports = ImgRef