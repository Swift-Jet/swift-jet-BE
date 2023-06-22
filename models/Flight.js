const mongoose = require("mongoose");
const FlightSchema = new mongoose.Schema({
  flight_type: {
    type: String,
    enum: ["Deals", "Shared"],
    default: "Shared",
  },
  destination_airport: {
    type: Object,
  },
  departure_airport: {
    type: Object,
  },
  inbound_price: {
    type: String,
  },
  departure_date: {
    type: Date,
  },
  departure_time: {
    type: String,
  },
  arrival_time: {
    type: String,
  },
  aircraft: {
    type: Object,
  },
  created_date: {
    type: Date,
  },
  created_by: {
    type: String,
  },
  updated_by: {
    type: String,
  },
});

module.exports = mongoose.model("Flight", FlightSchema);
