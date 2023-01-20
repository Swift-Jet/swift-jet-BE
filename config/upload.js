const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage }= require('multer-storage-cloudinary');
const res = require('express/lib/response');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'switf_jet_dev_staging',
      resource_type: "auto", 
      // format: async (req, file) => 'png, mp4', // supports promises as well
      public_id: (req, file) => file.filename,
    },
  });
  const parser = multer({storage});
  module.exports = parser;