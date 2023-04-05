const mongoose = require("mongoose");
const EmptyLegsSchema = new mongoose.Schema({
  tripType: {
    type: String,
  },
  source: {
    type: Object,
  },
  destination: {
    type: Object,
  },
  inbound_price: {
    type: String,
  },
  capacity: {
    type: String,
  },
  depatureDate: {
    type: String,
  },
  returningDate: {
    type: String,
  },
  depatureTime: {
    type: String,
  },
  returningTime: {
    type: String,
  },
});

module.exports = mongoose.model("EmptyLegs", EmptyLegsSchema);
