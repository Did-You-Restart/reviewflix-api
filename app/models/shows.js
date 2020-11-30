const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  starring: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  released: {
    type: Date,
    required: true
  },
  token: String
}, {
  timestamps: true
}
)

module.exports = mongoose.model('Show', showSchema)
