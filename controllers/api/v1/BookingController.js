const mongoose = require("mongoose");
const BookingServices = require("../../../services/BookingServices");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class AirportController {
  static async addBooking(req, res) {
    const {
      user,
      booking_details,
      additional_quote,
      status
    } = req.body;

    try {
      if (!user || user === {}) {
        return errorResponse(res, 400, "User details can not be empty");
      }
      if (!status || status === "") {
        return errorResponse(res, 400, "Status can not be empty");
      }
      if (!booking_details || booking_details === []) {
        return errorResponse(res, 400, "Booking details can not be emptyn");
      }
      const characters = "0123456789";
      let code = "SW";
      for (let i = 0; i < 9; i++) {
        code += characters[Math.floor(Math.random() * 5)];
      }

      const newBooking = {
        user,
        booking_number: code,
        booking_details,
        additional_quote,
        status
      };
      const response = await BookingServices.createBooking(newBooking);
      return successResponse(res, 201, "Booking created successfully", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async getBookings(req, res) {
    try {
      const response = await BookingServices.getBookings();
      return successResponse(res, 200, "Bookings fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }
};
