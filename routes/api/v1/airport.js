const express = require("express");
const router = express.Router();
const AirportController = require("../../../controllers/api/v1/AirportController");

router.post("/add", AirportController.addAirport);
router.get("/all", AirportController.getAirports)

module.exports = router;  