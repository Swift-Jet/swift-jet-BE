const UserServices = require("../../../services/UserServices");
const { successResponse, errorResponse } = require("../../../utils/responses");
const nodemail = require("./../../../config/nodemailer");
const bcrypt = require("bcryptjs");
const User = require("../../../models/User");
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

      if (response?.errors) {
        return errorResponse(res, 500, "An error occured", response);
      }
      nodemail.sendConfirmationEmail(
        newUser.first_name,
        newUser.email,
        newUser.confirmationCode
      );
      return successResponse(res, 201, "User account created", response);
    } catch (error) {
      console.log(error);
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
      //  res.cookie('token', token, { httpOnly: true });
      return successResponse(res, 200, "Login successful", payload);
    } catch (error) {
      console.log(error);
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async forgotPassword(req, res) {
    const { email } = req.body;
    try {
      if (!email || email === "") {
        return errorResponse(res, 400, "Please enter your email");
      }

      let user;

      const lowerEmail = email.toLowerCase();
      user = await UserServices.getUserByEmail(lowerEmail);

      if (!user) {
        return errorResponse(
          res,
          400,
          "User with email does not exist on our platform"
        );
      }

      let expiresIn = new Date();
      expiresIn.setMinutes(expiresIn.getMinutes() + 10);
      const verification_code = Math.floor(100000 + Math.random() * 900000);
      user.passwordResetCode = verification_code;
      user.passwordResetCodeExpire = expiresIn;
      user.save();

      nodemail.forgotPasswordEmail(
        user.first_name,
        user.email,
        verification_code
      );

      return successResponse(
        res,
        201,
        "Kindly check your email for a confirmation code",
        user.email
      );
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async resetPassword(req, res) {
    const { password, token } = req.body;
    User.findOne({
      passwordResetCode: token,
    })
      .then((user) => {
        if (!user) {
          return res
            .status(404)
            .send({ message: "We can't verify your reset code" });
        } else {
          user.password = password;
          user.save();
          return res
            .status(200)
            .send({ message: "Password changed successfully" });
        }
      })
      .catch((e) => console.log("error", e));
  }
};
