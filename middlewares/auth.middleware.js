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
    req.userRole = decoded.user.role;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Невалидный токен" });
  }
}

export function allowRoles(...allowed) {
  return (req, res, next) => {
    if (!req.userRole) {
      return res.status(403).json({ message: "Требуется пройти аутентификацию" });
    }

    if (allowed.includes(req.userRole)) {
      next();
    } else {
      return res.status(403).json({ message: "У вас недостаточно прав" });
    }
  };
}
