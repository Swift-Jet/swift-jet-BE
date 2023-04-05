const FlightServices = require("../../../services/FlightServices");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class AirportController {
  static async addFlight(req, res) {
    const {
      flight_type,
      destination,
      source,
      inbound_price,
      capacity, 
      depatureDate,
      depatureTime,
      returningDate,
      returningTime,
      aircraft,
      created_date,
      created_by,
      updated_by,
    } = req.body;

    try {
      if (!flight_type || flight_type === "") {
        return errorResponse(res, 400, "flight_type can not be empty");
      }
      if (!destination || destination === {}) {
        return errorResponse(res, 400, "destination airport can not be empty");
      }
      if (!source || source === {}) {
        return errorResponse(res, 400, "departure airport can not be empty");
      }
      if (!inbound_price || inbound_price === "") {
        return errorResponse(res, 400, "inbound price can not be empty");
      }
      if (!depatureDate || depatureDate === "") {
        return errorResponse(res, 400, "Departure date can not be empty");
      }
      if (!depatureTime || depatureTime === "") {
        return errorResponse(res, 400, "Departure date can not be empty");
      }
      if (!capacity || capacity === "") {
        return errorResponse(res, 400, "capacity can not be empty");
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


      const newFlight = {
        flight_type,
        destination,
        source,
        inbound_price,
        capacity, 
        depatureDate,
        depatureTime,
        returningDate,
        returningTime,
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
      const response = await BookingServices.getFlights();
      return successResponse(res, 200, "Flights fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }
};