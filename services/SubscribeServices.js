const Subscribe = require("../models/subscribe");

module.exports = class SubscribeServices {
  static async userSubscribe(data) {
    try {
      const newSubscriber = {
        email: data.email,
      };
      const response = await new Subscribe(newSubscriber).save();
      return response;
    } catch (error) {
      return error;
    }
  }

  static async getSubscribers() {
    try {
      const response = await Subscribe.find();
      return response;
    } catch (error) {
      return error;
    }
  }
};
