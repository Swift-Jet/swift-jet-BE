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
  depature_date: {
    type: Date,
  },
  departure_time: {
    type: Date,
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
    type: Date,
  },
});

module.exports = mongoose.model("Flight", FlightSchema);
