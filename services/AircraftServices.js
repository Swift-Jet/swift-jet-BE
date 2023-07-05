const Aircraft = require("../models/Aircraft");
module.exports = class AircraftServices {
  static async createAircraft(data) {
    try {
      const newAircraft = {
        sjac_code: data.sjac_code,
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


  static async getAircraftById(id) {
    try {
      const query = { _id: id };      
      const response = await Aircraft.find(query);
      return response;
    } catch (error) {
      return error;
    }
  }
};
