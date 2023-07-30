const express = require("express");
const router = express.Router();
const { } = require("../middlewares/middleware");
const { Signup, Login } = require("../controllers/authController");
const { encryptPassword } = require("../middlewares/auth");

router.post("/signup",encryptPassword, Signup)
router.post("/login", Login)







// You have to create put and delete routes;



module.exports = router;
