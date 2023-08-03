const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  enquiry: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("Enquiry", EnquirySchema);