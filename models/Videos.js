const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideosSchema = new Schema({
  title: String,
  url: String,
  video_date: String,
  added: { type: Date, default: Date.now }
})

const Videos = mongoose.model('Videos', VideosSchema)

module.exports = Videos