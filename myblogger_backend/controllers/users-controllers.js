const { validationResult } = require("express-validator");
const User = require("../models/user-schema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res, next) => {
    const { username, email, password } = req.body;

    //validating user input
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const error = new Error("enter valid data", 422);
        return next(error);
    }

    let identifyUser;
    try {
        //checking if email already exists
        identifyUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new Error("try again later", 400);
        return next(error);
    }
    // returning error if email already exists
    console.log(identifyUser);
    if (identifyUser) {
        let error = new Error("email already exists");
        error.code = 400;
        return next(error);
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        let error = new Error("failed to register user");
        error.code = 400;
        return next(error);
    }
    // creating user
    // req.file.path = "dummy"
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        image: "http://localhost:5000/" + req.file.path,
    });
    console.log(newUser);
    //saving to db
    try {
        await newUser.save();
    } catch (err) {
        const error = new Error("try again later", 400);
        return next(error);
    }

    //generating jwt token
    let token;
    try {
        token = jwt.sign({ email: email, userId: newUser.id }, "secretkey", {
            expiresIn: "1h",
        });
    } catch (err) {
        const error = new Error("try again later", 400);
        return next(error);
    }

    return res
        .status(201)
        .json({
            email: email,
            userId: newUser.id,
            token: token,
            username: newUser.username,
            image: newUser.image,
        });
};

const userLogIn = async (req, res, next) => {
    const { email, password } = req.body;
    //validating user input
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const error = new Error("invalid credentials", 401);
        return next(error);
    }
    let identifyUser;
    try {
        identifyUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new Error("try again later", 500);
        return next(error);
    }
    //decoding the password and comparing
    let isPasswordValid = false;
    try {
        isPasswordValid = await bcrypt.compare(password, identifyUser.password);
    } catch (err) {
        let error = new Error("failed to login user");
        error.code = 400;
        return next(error);
    }

    if (!identifyUser || !isPasswordValid) {
        let error = new Error("invalid credentials");
        error.code = 401;
        return next(error);
    }
    //generating jwt token
    let token;
    try {
        token = jwt.sign(
            { email: email, userId: identifyUser.id },
            "secretkey",
            { expiresIn: "1h" }
        );
    } catch (err) {
        const error = new Error("try again later", 400);
        return next(error);
    }

    res.status(200).json({
        email: email,
        userId: identifyUser.id,
        token: token,
        username: identifyUser.username,
        image: identifyUser.image,
    });
};

module.exports = {
    userSignUp,
    userLogIn,
};
