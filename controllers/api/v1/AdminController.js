const AdminServices = require("../../../services/AdminServices");
const { successResponse, errorResponse } = require("../../../utils/responses");
const bcrypt = require("bcryptjs");
const logger = require("../../../logger");
module.exports = class AdminController {
  static async addAdmin(req, res) {
    const { first_name, last_name, email, password, role } = req.body;

    try {
      if (!first_name || first_name === "") {
        return errorResponse(res, 400, "Please enter first_name");
      }
      if (!last_name || last_name === "") {
        return errorResponse(res, 400, "Please enter last_name");
      }
      if (!email || email === "") {
        return errorResponse(res, 400, "Please enter email");
      }
      if (!password || password === "") {
        return errorResponse(res, 400, "Please enter password");
      }
      if (password.length < 9) {
        return errorResponse(res, 400, "Please enter a valid password");
      }
      if (!role) {
        return errorResponse(res, 400, "Please enter a valid role");
      }
      const lowerEmail = email.toLowerCase();

      const admin = await AdminServices.getAdminByEmail(lowerEmail);
      if (admin) {
        return errorResponse(res, 400, "Admin with email already exists");
      }

      const newAdmin = {
        first_name,
        last_name,
        email,
        password,
        role,
      };

      const response = await AdminServices.addAdmin(newAdmin);
      if(response?.errors){
        return errorResponse(res, 500, "An error occured", response);
      }
      logger.info(`Admin account created, data: ${response}`);
      return successResponse(res, 201, "Admin account created", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error", error);
    }
  }

  static async getUsers(req, res) {
    try {
      const response = await AdminServices.getUsers();
      return successResponse(res, 200, "Users fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || email === "") {
        return errorResponse(res, 400, "Please enter your email");
      }
      if (!password || password === "") {
        return errorResponse(res, 400, "Please enter your password");
      }

      const lowerEmail = email.toLowerCase();
      const user = await AdminServices.getUserByEmail(lowerEmail);

      if (!user) {
        return errorResponse(res, 401, "Incorrect email or password");
      }

      // const isMatch = await user.matchPassword(password);
      // console.log("isMatch", isMatch);
      // if (!isMatch) {
      //   return errorResponse(res, 401, "Incorrect password");
      // }

      // if (user.status === "pending") {
      //   return errorResponse(res, 400, "Please verify your email address.");
      // }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return errorResponse(res, 401, "Incorrect password");
      }
      const token = user.getSignedJwtToken();

      const payload = {
        token: token,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      };
      return successResponse(res, 200, "Login successful", payload);
    } catch (error) {
      console.log(error);
      return errorResponse(res, 500, "Server Error");
    }
  }
};
