const express = require("express");
const router = express.Router();
const BookingController = require("../../../controllers/api/v1/BookingController");

router.post("/add", BookingController.addBooking);
router.get("/all", BookingController.getBookings)

module.exports = router;  