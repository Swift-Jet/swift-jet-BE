const Booking = require("../models/Booking");

module.exports = class AirportServices {
  static async createBooking(data) {
    try {
      const newBooking = {
        user: data.user,
        email: data.email,
        booking_number: data.booking_number,
        booking_details: data.booking_details,
        additional_quote: data.additional_quote,
        status: data.status,
      };
      const response = await new Booking(newBooking).save();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getBookings() {
    try {
      const response = await Booking.find();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getBookingByEmail(email) {
    try {
      const query = { email: email };      
      const response = await Booking.find(query);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async trackBooking(booking_number) {
    try {
      const query = { booking_number: booking_number };      
      const response = await Booking.find(query);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async updateBooking() {
    
  }
};
