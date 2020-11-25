const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  token: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)
