const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  booking_number: {
    type: String,
  },
  status: {
    type: String,
    enum: ["New", "Processing", "Confirmed"],
    default: "New",
  },
  user: {
    type: Object,
  },
  email: {
    type: String
  },
  booking_details: {
    type: Object,
  },
  additional_quote: {
    type: Array,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
