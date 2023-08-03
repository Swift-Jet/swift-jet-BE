const EnquiryServices = require("../../../services/EnquiryServices")
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class SubscribeController {

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

            const response = await EnquiryServices.makeEnquiry(newEnquiry);
            return successResponse(res, 201, "Enquiry made successfully", response);
        } catch (error) {
            return errorResponse(res, 500, "Server Error");
        }
    }

    static async getEnquiries(req, res) {
        try {
            const response = await EnquiryServices.getEnquiry();
            return successResponse(res, 200, "Enquiries fetched", response);
        } catch (error) {
            return errorResponse(res, 500, "Server Error");
        }
    }

};
