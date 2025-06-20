const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  tags: [String],

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  isPublished: {
    type: Boolean,
    default: true,
  }

}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);