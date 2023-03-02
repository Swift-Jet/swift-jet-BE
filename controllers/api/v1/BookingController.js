const mongoose = require("mongoose");
const BookingServices = require("../../../services/BookingServices");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class AirportController {
  static async addBooking(req, res) {
    const {
      user,
      phone_number,
      booking_details,
      additional_quote,
    } = req.body;

    try {
      if (!user || user === []) {
        return errorResponse(res, 400, "User details can not be empty");
      }
      if (!phone_number || phone_number === "") {
        return errorResponse(res, 400, "Please enter phone number");
      }
      if (!booking_details || booking_details === []) {
        return errorResponse(res, 400, "Booking details can not be emptyn");
      } 

      const newBooking = {
        user,
        phone_number,
        booking_details,
        additional_quote,
      };
      const response = await BookingServices.createBooking(newBooking);
      return successResponse(res, 201, "Booking created successfully");
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
