const express = require("express");
const router = express.Router();
const FlightController = require("../../../controllers/api/v1/FlightController");

router.post("/add", FlightController.addFlight);
router.get("/all", FlightController.getFlights)
router.get("/single", FlightController.getFlightById);
router.put("/update/:id", FlightController.updateAircraft);
router.delete("/delete/:id", FlightController.deleteFlightById);


module.exports = router;  