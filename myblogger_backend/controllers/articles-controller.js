const articleCreate = (req, res) => {
    const { title, content, description, ttr } = req.body;
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
