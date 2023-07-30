const express = require("express");
const router = express.Router();
const  multipart = require('connect-multiparty');
const path=require("path");
const { fileUpload, fileUploadCloudinary } = require("../controllers/fileController");

const  multipartMiddleware = multipart({uploadDir:path.join(__dirname,"../uploads")});

// To my local folder --->
router.post("/local",multipartMiddleware, fileUpload)
router.post("/cloudinary",multipartMiddleware, fileUploadCloudinary)









// You have to create put and delete routes;



module.exports = router;
