const { log } = require("winston");
const Flight = require("../models/Flight");

module.exports = class FlightServices {
  static async createFlight(data) {
    try {
      const newFlight = {
        flight_type: data.flight_type,
        destination_airport: data.destination_airport,
        departure_airport: data.departure_airport,
        inbound_price: data.inbound_price,
        departure_date: data.departure_date,
        departure_time: data.departure_time,
        arrival_time: data.arrival_time,
        aircraft: data.aircraft,
        created_date: data.created_date,
        created_by: data.created_by,
        updated_by: data.updated_by,
      };
      const response = await new Flight(newFlight).save();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getFlights() {
    try {
      const response = await Flight.find();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getFlightById(id) {
    try {
      const query = { _id: id };      
      const response = await Flight.find(query);
      return response;
    } catch (error) {
      return error;
    }
  }
  
  static async deleteFlightById(id){
    try {
      const query = { _id: id }; 
      const response = await Flight.findByIdAndDelete(query);
      return response;
    } catch (error) {
      return error;
    }
  }
  static async updateFlight(id, data) {
    try {
     
  
      const response = await Flight.findByIdAndUpdate(
        id,
        data,
        { new: true }
      );
  
      return response;
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
