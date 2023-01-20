const mongoose = require("mongoose");
const AirportServices = require("../../../services/AirportServices");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class AirportController {
  static async addAirport(req, res) {
    const {
      code,
      lat,
      lon,
      name,
      city,
      state,
      country,
      woeid,
      tz,
      phone,
      type,
      email,
      url,
      runway_length,
      elev,
      icao,
      direct_flights,
      carriers,
    } = req.body;

    try {
      if (!code || code === "") {
        return errorResponse(res, 400, "Please enter airport code");
      }
      if (!lat || lat === "") {
        return errorResponse(res, 400, "Please enter airport lat");
      }
      if (!lon || lon === "") {
        return errorResponse(res, 400, "Please enter airport lon");
      }
      if (!name || name === "") {
        return errorResponse(res, 400, "Please enter airport name");
      }
      if (!city || city === "") {
        return errorResponse(res, 400, "Please enter airport city");
      }
      if (!state || state === "") {
        return errorResponse(res, 400, "Please enter airport state");
      }
      if (!country || country === "") {
        return errorResponse(res, 400, "Please enter airport country");
      }
      if (!woeid || woeid === "") {
        return errorResponse(res, 400, "Please enter airport woeid");
      }
      if (!tz || tz === "") {
        return errorResponse(res, 400, "Please enter airport tz");
      }
      if (!type || type === "") {
        return errorResponse(res, 400, "Please enter airport type");
      }
      if (!runway_length || runway_length === "") {
        return errorResponse(res, 400, "Please enter airport runway_length");
      }
      if (!elev || elev === "") {
        return errorResponse(res, 400, "Please enter airport email");
      }
      if (!icao || icao === "") {
        return errorResponse(res, 400, "Please enter airport icao");
      }
      if (!direct_flights || direct_flights === "") {
        return errorResponse(res, 400, "Please enter airport direct_flights");
      }
      if (!carriers || carriers === "") {
        return errorResponse(res, 400, "Please enter airport carriers");
      }

      const newAirport = {
        code,
        lat,
        lon,
        name,
        city,
        state,
        country,
        woeid,
        tz,
        phone,
        type,
        email,
        url,
        runway_length,
        elev,
        icao,
        direct_flights,
        carriers,
      };
      const response = await AirportServices.createAirport(newAirport);
      return successResponse(res, 201, "Added airport successfully");
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async getAirports(req, res) {
    try {
      const response = await AirportServices.getAirports();
      return successResponse(res, 200, "Airport fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }
};
