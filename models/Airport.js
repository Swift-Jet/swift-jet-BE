const mongoose = require("mongoose");

const AirportSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  lon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  woeid: {
    type: String,
    required: true,
  },
  tz: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  runway_length: {
    type: String,
    required: true,
  },
  elev: {
    type: String,
    required: true,
  },
  icao: {
    type: String,
    required: true,
  },
  direct_flights: {
    type: String,
    required: true,
  },
  carriers: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Airport", AirportSchema);
