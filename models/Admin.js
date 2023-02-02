const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "operator",
    enum: ["operator", "supervisor", "admin"],
    required: true,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
