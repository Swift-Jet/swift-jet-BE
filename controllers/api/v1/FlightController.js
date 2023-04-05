const FlightServices = require("../../../services/FlightServices");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class AirportController {
  static async addFlight(req, res) {
    const {
      flight_type,
      destination_airport,
      departure_airport,
      inbound_price,
      departure_date,
      departure_time,
      arrival_time,
      aircraft,
      created_date,
      created_by,
      updated_by,
    } = req.body;

    try {
      if (!flight_type || flight_type === "") {
        return errorResponse(res, 400, "flight_type can not be empty");
      }
      if (!destination_airport || destination_airport === {}) {
        return errorResponse(res, 400, "destination airport can not be empty");
      }
      if (!departure_airport || departure_airport === {}) {
        return errorResponse(res, 400, "departure airport can not be empty");
      }
      if (!inbound_price || inbound_price === "") {
        return errorResponse(res, 400, "inbound price can not be empty");
      }
      if (!departure_date || departure_date === "") {
        return errorResponse(res, 400, "Departure date can not be empty");
      }
      if (!departure_time || departure_time === "") {
        return errorResponse(res, 400, "Departure date can not be empty");
      }
      if (!arrival_time || arrival_time === []) {
        return errorResponse(res, 400, "Arrival time can not be empty");
      }
      if (!aircraft || aircraft === {}) {
        return errorResponse(res, 400, "aircraft can not be empty");
      }
      if (!created_date || created_date === {}) {
        return errorResponse(res, 400, "created date can not be empty");
      }
      if (!created_by || created_by === "") {
        return errorResponse(res, 400, "created by can not be empty");
      }
    //   if (!updated_by || updated_by === "") {
    //     return errorResponse(res, 400, "Updated by can not be empty");
    //   }

      const newFlight = {
        flight_type,
        destination_airport,
        departure_airport,
        inbound_price,
        departure_date,
        departure_time,
        arrival_time,
        aircraft,
        created_date,
        created_by,
        updated_by,
      };
     
      const response = await FlightServices.createFlight(newFlight);
      return successResponse(res, 201, "Flight created successfully", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async getFlights(req, res) {
    try {
      const response = await FlightServices.getFlights();
      return successResponse(res, 200, "Flights fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }
};
