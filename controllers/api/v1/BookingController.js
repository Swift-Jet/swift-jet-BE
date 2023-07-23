const BookingServices = require("../../../services/BookingServices");
const nodemail = require("./../../../config/nodemailer");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class AirportController {
  static async addBooking(req, res) {
    const { user, booking_details, additional_quote, status, email } = req.body;

    try {
      if (!user) {
        return errorResponse(res, 400, "User details can not be empty");
      }
      if (!status || status === "") {
        return errorResponse(res, 400, "Status can not be empty");
      }
      if (!booking_details){
        return errorResponse(res, 400, "Booking details can not be empty");
      }
      if (additional_quote.length === 0 && booking_details.tripType != "Shared") {
        return errorResponse(res, 400, "Please add least one quote");
      }
      const characters = "0123456789";
      let code = "SW";
      for (let i = 0; i < 9; i++) {
        code += characters[Math.floor(Math.random() * 5)];
      }

      const newBooking = {
        email,
        user,
        booking_number: code,
        booking_details,
        additional_quote,
        status,
      };
      const response = await BookingServices.createBooking(newBooking);
      nodemail.bookingRecievedEmail(newBooking.user.email, newBooking.booking_number, newBooking.user.first_name);
      nodemail.bookingRecievedAdminEmail(newBooking.user.email, newBooking.booking_number, newBooking.user.first_name);
      return successResponse(
        res,
        201,
        "Booking created successfully",
        response
      );
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

  static async getBookingByEmail(req, res) {
    try {
      const email = req.query.email;
      const response = await BookingServices.getBookingByEmail(email);
      return successResponse(res, 200, "User Bookings fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async trackBooking(req, res) {
    try {
      const booking_number = req.query.booking_number;
      const response = await BookingServices.trackBooking(booking_number);
      return successResponse(res, 200, "Tracking details fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }
};
