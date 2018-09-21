const gallery = require('express').Router()
const mongoose = require('mongoose')
const multer = require('multer')
const cloudinary = require('cloudinary')

require('dotenv').config()

gallery.get('/', (req, res) => {
  res.send('Hello, World!')
})

module.exports = gallery