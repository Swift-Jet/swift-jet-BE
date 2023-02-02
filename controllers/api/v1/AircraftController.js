const AircraftServices = require("../../../services/AircraftServices");
const { successResponse, errorResponse } = require("../../../utils/responses");

module.exports = class AircraftController {
  static async addAircraft(req, res) {
    const {
      manufacturer,
      model,
      classification,
      no_of_seats,
      speed,
      range,
      luggage_capacity,
      interior_height,
      interior_width,
      overview_summary,
    } = req.body;
    const image_url = req.files.image_url[0].path;
    const image_url_2 = req.files.image_url_2[0].path;
    const image_url_3 =req.files.image_url_3[0].path;
    const image_url_4 = req.files.image_url_4[0].path;
    const image_url_5 =req.files.image_url_5[0].path;

    try {
      if (!manufacturer || manufacturer === "") {
        return errorResponse(res, 400, "Please enter airport manufacturer");
      }
      if (!model || model === "") {
        return errorResponse(res, 400, "Please enter airport model");
      }
      if (!classification || classification === "") {
        return errorResponse(res, 400, "Please enter airport classification");
      }
      if (!no_of_seats || no_of_seats === "") {
        return errorResponse(res, 400, "Please enter airport no_of_seats");
      }
      if (!speed || speed === "") {
        return errorResponse(res, 400, "Please enter airport speed");
      }
      if (!range || range === "") {
        return errorResponse(res, 400, "Please enter airport range");
      }
      if (!luggage_capacity || luggage_capacity === "") {
        return errorResponse(res, 400, "Please enter airport luggage_capacity");
      }
      if (!interior_height || interior_height === "") {
        return errorResponse(res, 400, "Please enter airport interior_height");
      }
      if (!interior_width || interior_width === "") {
        return errorResponse(res, 400, "Please enter airport interior_width");
      }
      if (!overview_summary || overview_summary === "") {
        return errorResponse(res, 400, "Please enter airport overview_summary");
      }
      const characters = "0123456789";
      let sjac_code = "SJAC-";
      for (let i = 0; i < 5; i++) {
        sjac_code += characters[Math.floor(Math.random()* 5)];
      }
      const newAircraft = {
        manufacturer,
        model,
        classification,
        no_of_seats,
        speed,
        range,
        luggage_capacity,
        interior_height,
        interior_width,
        overview_summary,
        sjac_code,
        image_url,
        image_url_2,
        image_url_3,
        image_url_4,
        image_url_5
      };
      const response = await AircraftServices.createAircraft(newAircraft);
      return successResponse(res, 201, "Added aircraft successfully");
    } catch (error) {
      console.log(error);
      return errorResponse(res, 500, "Server Error");
    }
  }

  static async getAircrafts(req, res) {
    try {
      const response = await AircraftServices.getAircrafts();
      return successResponse(res, 200, "Aircrafts fetched", response);
    } catch (error) {
      return errorResponse(res, 500, "Server Error");
    }
  }
};
