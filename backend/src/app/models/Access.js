const mongoose = require("mongoose");

const AccessSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  validateDate: {
    type: Date,
    required: true,
  },
  token_access: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Access", AccessSchema);
