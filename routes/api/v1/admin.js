const express = require("express");
const router = express.Router();
const AdminController = require("../../../controllers/api/v1/AdminController")


router.post("/add", AdminController.addAdmin);
router.get("/summary", AdminController.getDasboardSummary);
// router.get("/all", AdminController.g);
// router.post("/login", AdminController.login);

module.exports = router;  