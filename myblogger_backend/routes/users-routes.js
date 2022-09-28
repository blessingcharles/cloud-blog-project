const express = require("express");
const { check } = require("express-validator");
const { userSignUp, userLogIn } = require("../controllers/users-controllers");
const imageUploader = require("../middlewares/image-uploader");

const userrouter = express.Router();
userrouter.post(
    "/signup",
    imageUploader.single("image"),
    [
        check("username").not().isEmpty(),
        check("password").isLength({ min: 5 }),
        check("email").isEmail(),
    ],
    userSignUp
);

userrouter.post(
    "/login",
    [check("password").isLength({ min: 5 }), check("email").isEmail()],
    userLogIn
);

module.exports = userrouter;
