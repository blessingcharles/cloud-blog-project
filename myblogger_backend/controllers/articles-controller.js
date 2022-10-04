const { validationResult } = require("express-validator");
const { default: next } = require("next");
const Article = require("../models/article-schema");

const articleCreate = async (req, res) => {
    console.log(req.body   )
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
        image: "http://localhost:5000/" + req.file.path ,
    });

    try {
        await newArtice.save();
    } catch (err) {
        return res.status(400).json({ message: "something went wrong" });
    }
    return res.status(201).json({ message: "successfully created" });
};

const articleGetAllId = async (req , res)=>{
    const results = await Article.find().select('id');

    return res.status(200).json(results)
}
const articleGetSingle = async (req, res) => {
    const id = req.query.id;
    const temp = await Article.findById(id)
    if (!id) {
        return res.status(400).json({ message: "title required" });
    }
    let article;
    try {
        article = await Article.aggregate([
            {
                $match:{
                    title: temp.title
                }
            },
            {
                $lookup:{
                    from: 'users' ,
                    localField: 'creator' ,
                    foreignField: '_id' ,
                    as: 'author'
                }
            },
            {
                $project:{
                    author:{
                        password: 0
                    }
                }
            }, 
            {
                $unwind:'$author'
            }
        ]);
        
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
        articles = await Article.aggregate([
            {
                $lookup:{
                    from: 'users' ,
                    localField: 'creator' ,
                    foreignField: '_id' ,
                    as: 'author'
                }
            },
            {
                $project:{
                    author:{
                        password: 0
                    }
                }
            }, 
            {
                $unwind:'$author'
            }
        ]).sort({createdAt: -1}).limit(5) ;

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
    articleGetAllId
};
