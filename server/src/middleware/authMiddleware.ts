const jwt = require("jsonwebtoken");

export const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Не авторизован" });
    }
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (e) {
    return res.status(401).json({ message: "Не авторизован" });
  }
};
