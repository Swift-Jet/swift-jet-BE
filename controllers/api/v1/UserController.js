const UserServices = require("../../../services/UserServices");
const { successResponse, errorResponse } = require("../../../utils/responses");
const bcrypt = require("bcryptjs");
module.exports = class UserController {
  static async signUp(req, res) {
    const { first_name, last_name, email, password } = req.body;

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
      const lowerEmail = email.toLowerCase();

      const user = await UserServices.getUserByEmail(lowerEmail);
      if (user) {
        return errorResponse(res, 400, "User with email already exists");
      }

      const characters =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let confirmationCode = "";
      for (let i = 0; i < 5; i++) {
        confirmationCode += characters[Math.floor(Math.random() * 6)];
      }

      const newUser = {
        first_name,
        last_name,
        email,
        password,
        confirmationCode,
      };
      const response = await UserServices.signUp(newUser);
      if(response?.errors){
        return errorResponse(res, 500, "An error occured", response);
      }
      
      return successResponse(res, 201, "User account created", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }
 

  static async getUsers(req, res) {
    try {
      const response = await UserServices.getUsers();
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
      const user = await UserServices.getUserByEmail(lowerEmail);

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
      res.cookie('token', token, { httpOnly: true });
      return successResponse(res, 200, "Login successful", payload);
    } catch (error) {
    
      return errorResponse(res, 500, "Server Error");
    }
  }
};
