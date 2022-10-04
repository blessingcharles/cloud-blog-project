const express = require("express");
const { check } = require("express-validator");

const {
    articleCreate,
    articleGetSingle,
    articleGetHottest,
    articleGetAllId
} = require("../controllers/articles-controller");
const imageUploader = require("../middlewares/image-uploader");
const verifyJwt = require("../middlewares/verify-jwt");

const articlerouter = express.Router();


articlerouter.get("/search", articleGetSingle);
articlerouter.get("/hottest", articleGetHottest);
articlerouter.get("/aid" , articleGetAllId)
articlerouter.use(verifyJwt)
articlerouter.post(
    "/create",
    imageUploader.single("image"),
    [
        check("title").not().isEmpty(),
        check("description").isLength({ min: 5 }),
        check("ttr").not().isEmpty() ,
        check("content").not().isEmpty(),
      ],
    articleCreate
);

module.exports = articlerouter;
