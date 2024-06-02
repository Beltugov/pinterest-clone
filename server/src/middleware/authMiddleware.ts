const jwt = require("jsonwebtoken");

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({message: "Не авторизован"});
        }
        try {
            req.body = jwt.verify(token, process.env.SECRET_KEY);
        } catch (TokenExpiredError) {
            return res.status(401).json({message: "Истек срок действия токена"});
        }
        next();
    } catch (e) {
        return res.status(500).json({
            message: "Ошибка",
            err: e
        });
    }
};
