const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") return next();

    let token;
    try {
        token = req.headers.authorization.split(" ")[1];
        if (!token) {
            throw new Error("authentication failed in token verification");
        }
        const tokenInfo = jwt.verify(token, "secretkey");
        req.userData = { userId: tokenInfo.userId };
        next();
    } catch (err) {
        const error = new Error(
            "authentication failed in token verification",
            400
        );
        return next(error);
    }
};
