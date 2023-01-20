const Airport = require("../models/Airport");

module.exports = class AirportServices {
  static async createAirport(data) {
    try {
      const newAirport = {
        code: data.code,
        lat: data.lat,
        lon: data.lon,
        name: data.name,
        city: data.city,
        state: data.state,
        country: data.country,
        woeid: data.woeid,
        tz: data.tz,
        phone: data.phone,
        type: data.type,
        email: data.email,
        url: data.url,
        runway_length: data.runway_length,
        elev: data.elev,
        icao: data.icao,
        direct_flights: data.direct_flights,
        carriers: data.carriers
      };
      const response = await new Airport(newAirport).save();
      return response;
    } catch (error) {
      return error;
    }
  }


  static async getAirports() {
    try {
      const response = await Airport.find();
      return response;
    } catch (error) {
      return error;
    }
  }
};
