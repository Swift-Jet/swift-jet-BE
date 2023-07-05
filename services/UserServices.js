const User = require("../models/User");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
module.exports = class UserServices {
  static async signUp(data) {
    try {
      const newUser = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        status: data.status,
        confirmationCode: data.confirmationCode,
      };
      const response = await new User(newUser).save();
      return response;
    } catch (error) {
      return error;
    }
  }
  static async resetPassword(data) {
    try {
      const newUser = {
        password: data.password,
      };
      const response = await new User(newUser).save();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getUsers() {
    try {
      const response = await User.find().select('_id email last_name first_name'); 
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getUserByEmail(user_email) {
    try {
      const singleUser = await User.findOne({ email: user_email })
      return singleUser;
    } catch (error) {
      return error;
    }
  }
};
