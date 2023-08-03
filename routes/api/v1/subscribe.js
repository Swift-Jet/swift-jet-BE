const express = require("express");
const router = express.Router();
const SubscribeController = require("../../../controllers/api/v1/SubscribeController")


router.post("/add", SubscribeController.addSubscriber);
router.get("/all", SubscribeController.getSubscribers);
router.post("/enquiry/add", SubscribeController.addSubscriber);
router.get("/enquiry/get", SubscribeController.getSubscribers);


module.exports = router;   