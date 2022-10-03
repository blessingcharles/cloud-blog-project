const [validationResult] = require("express-validator");
const { default: next } = require("next");
const Article = require("../models/article-schema");

const articleCreate = async (req, res) => {
    const { title, content, description, ttr } = req.body;
    //validating user input
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const error = new Error("enter valid data", 422);
        return next(error);
    }

    let newArtice = new Article({
        title,
        content,
        description,
        ttr,
        image: "https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg",
    });

    try {
        await newArtice.save();
    } catch (err) {
        const error = new Error("Something went wrong", 400);
        return next(error);
    }

    return res.status(201).json({ message: "successfully created" });
};

const articleGetSingle = async (req, res) => {
    const title = req.params.title;
    if(!title){
        return res.status(400).json({message : "title required"})
    }

    let article ;
    try{
        article = await Article.find({title})
        if(!article){
            const error = new Error("Article not found" , 400)
            return next(error)
        }
    }
    catch (err) {
        const error = new Error("Something went wrong", 400);
        return next(error);
    }

    return res.status(200).json(article)
};

const articleGetHottest = async (req, res) => {};

module.exports = {
    articleCreate,
    articleGetSingle,
    articleGetHottest,
};
