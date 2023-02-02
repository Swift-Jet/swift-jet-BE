const Admin = require("../models/Admin")
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

  static async getAdminByEmail(user_email) {
    try {
      const singleAdmin = await Admin.findOne({ email: user_email });
      return singleAdmin;
    } catch (error) {
      return error;
    }
  }
};
