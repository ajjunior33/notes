const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  message: {
    type: String,
    requried: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Notes", NotesSchema);
