const express = require("express");
const router = express.Router();
const EnquiryController = require("../../../controllers/api/v1/EnquiryController")

router.post("/add", EnquiryController.makeEnquiry);
router.get("/get", EnquiryController.getEnquiries);


module.exports = router;   