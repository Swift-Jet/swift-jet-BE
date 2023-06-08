const Admin = require("../models/Admin");
const User = require("../models/User");
const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const Aircraft = require("../models/Aircraft")

module.exports = class AdminServices {
  static async addAdmin(data) {
    try {
      const newAdmin = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        role: data.role,
      };
      const response = await new Admin(newAdmin).save();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getAdmins() {
    try {
      const response = await Admin.find().select(
        "_id email last_name first_name"
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getDashboardSummary() {
    const flights = await Flight.find();
    const bookings = await Booking.find();
    const users = await User.find();
    const admins = await Admin.find();
    const aircrafts = await Aircraft.find();
    try {
      const data = {
        flights: flights,
        bookings: bookings,
        users: users,
        admins: admins,
        aircrafts: aircrafts,
        flight_total: flights.length,
        bookings_total: bookings.length,
        users_total: users.length,
        admins_total: admins.length,
        aircrafts_total: aircrafts.length
      };
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getSingleBooking(booking_number) {
    try {
      const singleBooking = await Booking.findOne({ booking_number: booking_number });
      return singleBooking;
    } catch (error) {
      return error;
    }
  }
};
