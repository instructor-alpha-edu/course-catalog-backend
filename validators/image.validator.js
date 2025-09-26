export function requireImage(req, res, next) {
  if (!req.file) {
    return res.status(422).json({ errors: [{ msg: "Файл 'image' обязателен" }] });
  }

  next();
}
