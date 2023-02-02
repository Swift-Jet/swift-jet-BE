const express = require("express");
const router = express.Router();
const UserController = require("../../../controllers/api/v1/UserController")

router.post("/add", UserController.signUp);
router.get("/all", UserController.getUsers);
router.post("/login", UserController.login);

module.exports = router;  