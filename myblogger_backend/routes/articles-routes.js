const express = require("express");
const { check } = require("express-validator");
const {
    articleCreate,
    articleGetSingle,
    articleGetHottest,
} = require("../controllers/articles-controller");
const imageUploader = require("../middlewares/image-uploader");

const articlerouter = express.Router();

articlerouter.post(
    "/create",
    imageUploader.single("image"),
    [
        check("title").not().isEmpty(),
        check("description").isLength({ min: 5 }),
        check("content").not().isEmpty(),
        check("ttr").not().isEmpty(),
    ],
    articleCreate
);

articlerouter.get("/:id", articleGetSingle);
articlerouter.get("/hottest", articleGetHottest);

module.exports = articlerouter;
