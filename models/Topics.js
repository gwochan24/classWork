const mongoose = require('mongoose');

const TopicsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Topic name required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Topic Name can not be more than 50 characters.'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a topic description.'],
    maxlength: [500, 'Description should not be more than 500 characters.'],
  },
});

module.exports = mongoose.model('Topics');
