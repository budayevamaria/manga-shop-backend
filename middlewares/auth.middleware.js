import { verifyToken } from "../services/jwt.js";

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Токен отсутсвует" });
  }

  const token = authHeader.replace(/Bearer\s/, "");

  try {
    const decoded = verifyToken(token);
    req.userId = decoded.user.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Невалидный токен" });
  }
}
