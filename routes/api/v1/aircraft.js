const express = require("express");
const router = express.Router();
const AircraftController = require("../../../controllers/api/v1/AircraftController");
const parser = require("../../../config/upload");

router.post(
  "/add",
  parser.fields([
    { name: "image_url", maxCount: 1 },
    { name: "image_url_2", maxCount: 1 },
    { name: "image_url_3", maxCount: 1 },
    { name: "image_url_4", maxCount: 1 },
    { name: "image_url_5", maxCount: 1 },
  ]),
  AircraftController.addAircraft
);
router.get("/all", AircraftController.getAircrafts);
router.get("/single", AircraftController.getAircraftById);

module.exports = router;
