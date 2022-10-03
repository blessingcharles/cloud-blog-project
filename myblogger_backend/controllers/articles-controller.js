const [validationResult] = require("express-validator");
const Article = require("../models/article-schema");


const articleCreate = (req, res) => {
    const { title, content, description, ttr } = req.body;
    //validating user input
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const error = new Error("enter valid data", 422);
        return next(error);
    }

    let newArtice = new Article({
        title ,
        content ,
        description ,
        image: "http://localhost:3000/image.png"
    })
};

const articleGetSingle = (req, res) => {
    const id = req.params.id;
};

const articleGetHottest = (req, res) => {};

module.exports = {
    articleCreate,
    articleGetSingle,
    articleGetHottest,
};
