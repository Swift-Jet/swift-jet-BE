const SubscribeServices = require("../../../services/SubscribeServices");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class SubscribeController {
    static async addSubscriber(req, res) {
        const {email} = req.body;

        try {
            if (!email || email === "") {
                return errorResponse(res, 400, "Email can not be empty");
            }
            const newSubscriber = {
                email
            };

            const response = await SubscribeServices.userSubscribe(newSubscriber);
            return successResponse(res, 201, "You have subscribed successfully to our news letter", response);
        } catch (error) {
            return errorResponse(res, 500, "Server Error");
        }
    }

    static async getSubscribers(req, res) {
        try {
            const response = await SubscribeServices.getSubscribers();
            return successResponse(res, 200, "Subscribers fetched", response);
        } catch (error) {
            return errorResponse(res, 500, "Server Error");
        }
    }

    static async makeEnquiry(req, res) {
        const {email, name , number , enquiry} = req.body;

        try {
            if (!email || email === "") {
                return errorResponse(res, 400, "Email can not be empty");
            }
            if (!name || name === "") {
                return errorResponse(res, 400, "Name can not be empty");
            }
            if (!number || number === "") {
                return errorResponse(res, 400, "Number can not be empty");
            }
            if (!enquiry || enquiry === "") {
                return errorResponse(res, 400, "Enquiry can not be empty");
            }
            const newEnquiry = {
                email,
                name,
                number,
                enquiry
            };

            const response = await SubscribeServices.makeEnquiry(newEnquiry);
            return successResponse(res, 201, "Enquiry made successfully", response);
        } catch (error) {
            return errorResponse(res, 500, "Server Error");
        }
    }

    static async getEnquiries(req, res) {
        try {
            const response = await SubscribeServices.getEnquiry();
            return successResponse(res, 200, "Enquiries fetched", response);
        } catch (error) {
            return errorResponse(res, 500, "Server Error");
        }
    }

};
