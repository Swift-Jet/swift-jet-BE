const mongoose = require("mongoose");

const AircraftSchema = new mongoose.Schema({
  sjac_code: {
    type: String,
    required: true,
    unique:true
  },
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  classification: {
    type: String,
    required: true,
  },
  no_of_seats: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  range: {
    type: String,
    required: true,
  },
  luggage_capacity: {
    type: String,
    required: true,
  },
  interior_height: {
    type: String,
    required: true,
  },
  interior_width: {
    type: String,
    required: true,
  },
  overview_summary: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
  },
  image_url_2: {
    type: String,
  },
  image_url_3: {
    type: String,
  },
  image_url_4: {
    type: String,
  },
  image_url_5: {
    type: String,
  },
});

module.exports = mongoose.model("Aircraft", AircraftSchema);
