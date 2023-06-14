const express = require("express");
const router = express.Router();
const AdminController = require("../../../controllers/api/v1/AdminController")


router.post("/add", AdminController.addAdmin);
router.get("/summary", AdminController.getDasboardSummary);
router.get("/single", AdminController.getSingleBooking)
router.put("/update", AdminController.updateStatus)

module.exports = router;  