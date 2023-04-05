const express = require("express");
const router = express.Router();
const FlightController = require("../../../controllers/api/v1/FlightController");

router.post("/add", FlightController.addFlight);
router.get("/all", FlightController.getFlights)


module.exports = router;  