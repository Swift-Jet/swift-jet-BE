const Aircraft = require("../models/Aircraft");
//import uniqueRandom from 'unique-random';
const uniqueRandom = require('unique-random');

const random = uniqueRandom(10, 100);

module.exports = class AircraftServices {
  static async createAircraft(data) {
    try {
      const newAircraft = {
        sjac_code: random(),
        manufacturer: data.manufacturer,
        model: data.model,
        classification: data.classification,
        no_of_seats: data.no_of_seats,
        speed: data.speed,
        range: data.range,
        luggage_capacity: data.luggage_capacity,
        interior_height: data.interior_height,
        interior_width: data.interior_width,
        overview_summary: data.overview_summary,
        image_url: data.image_url,
        image_url_2: data.image_url_2,
        image_url_3: data.image_url_3,
        image_url_4: data.image_url_4,
        image_url_5: data.image_url_5,
      };
      const response = await new Aircraft(newAircraft).save();
      return response;

    } catch (error) {
      return error;
    }
  }

  static async getAircrafts() {
    try {
      const response = await Aircraft.find();
      return response;
    } catch (error) {
      return error;
    }
  }
};
