const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
 user:{
  type: Object
 },
 phone_number: {
  type: String
 },
 booking_details:{
  type: Object
 },
 additional_quote:{
  type: Array
 }

});

module.exports = mongoose.model("Booking", BookingSchema);
