const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  reminder: {
    type: Boolean,
    required: true,
  },
});

const task = mongoose.model('task', taskSchema);
module.exports = task;
