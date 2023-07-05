const express = require("express");
const router = express.Router();
const UserController = require("../../../controllers/api/v1/UserController")
const TokenProvider = require("../../../middleware/tokenProvider")

router.post("/add", UserController.signUp);
router.get("/all", UserController.getUsers);
router.post("/login", UserController.login);
router.post("/reset-password", UserController.resetPassword);
router.post("/forgot-password", UserController.forgotPassword)
router.get("/token-provider",TokenProvider.tokenProvider )
router.post("/verify-token",TokenProvider.verifyToken );;

module.exports = router;  