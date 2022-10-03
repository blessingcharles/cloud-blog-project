const { validationResult } = require("express-validator");
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
        creator: req.userData.userId ,
        image: req.file.path ,
    });

    try {
        await newArtice.save();
    } catch (err) {
        return res.status(400).json({ message: "something went wrong" });
    }
    return res.status(201).json({ message: "successfully created" });
};

const articleGetSingle = async (req, res) => {
    const title = req.query.title;
    if (!title) {
        return res.status(400).json({ message: "title required" });
    }

    let article;
    try {
        article = await Article.find({ title });
        if (!article || article.length == 0) {
            const error = new Error("Article not found", 400);
            return next(error);
        }
    } catch (err) {
        return res.status(400).json({ message: "something went wrong" });
    }

    return res.status(200).json(article[0]);
};

const articleGetHottest = async (req, res) => {
    let articles = []
    let count = req.query.count || 5 ;

    try{
        articles = await Article.find().sort({createdAt : -1}).limit(count) ;
    }
    catch(err){
        return res.status(400).json({ message: "something went wrong" });
    }
    return res.status(200).json(articles)
};

module.exports = {
    articleCreate,
    articleGetSingle,
    articleGetHottest,
};
