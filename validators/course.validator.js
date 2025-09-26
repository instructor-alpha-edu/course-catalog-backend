import { body } from "express-validator";
import { createValidatorMiddleware } from "../middlewares/validator.middleware.js";
import { Levels } from "../models/Course.js";

const title = body("title")
  .exists()
  .withMessage("Поле 'title' обязательна")
  .isString()
  .withMessage("Поле 'title' должна быть строчкой");

const description = body("description")
  .exists()
  .withMessage("Поле 'description' обязательна")
  .isString()
  .withMessage("Поле 'description' должна быть строчкой")
  .isLength({ min: 25 })
  .withMessage("Поле 'description' должна содержать минимум 25 символов");

const level = body("level")
  .exists()
  .withMessage("Поле 'level' обязательна")
  .isIn(Object.values(Levels))
  .withMessage(
    `Поле 'level' должен содержать один из следующих значений: ${Object.values(Levels).join(", ")}`
  );

export const createCourseValidator = createValidatorMiddleware([title, description, level]);
