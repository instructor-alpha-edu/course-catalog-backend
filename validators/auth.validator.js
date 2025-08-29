import { body } from "express-validator";
import { createValidatorMiddleware } from "../middlewares/validator.middleware.js";

const firstName = body("firstName")
  .exists()
  .withMessage("Поле 'firstName' обязательна")
  .isString()
  .withMessage("Поле 'firstName' должна быть строчкой")
  .isLength({ min: 2 })
  .withMessage("Поле 'firstName' должна содержать минимум 2 символа");

const lastName = body("lastName")
  .exists()
  .withMessage("Поле 'lastName' обязательна")
  .isString()
  .withMessage("Поле 'lastName' должна быть строчкой")
  .isLength({ min: 3 })
  .withMessage("Поле 'lastName' должна содержать минимум 3 символа");

const email = body("email")
  .exists()
  .withMessage("Поле 'email' обязательна")
  .isEmail()
  .withMessage("Поле 'email' должна содержать символ '@'");

const password = body("password")
  .exists()
  .withMessage("Поле 'password' обязательна")
  .isStrongPassword()
  .withMessage(
    "Поле 'password' должна быть строчкой, которая содержит хотя бы 1 заглавную букву, 1 маленькую букву, 1 число и 1 специальный символ"
  );

export const registerValidator = createValidatorMiddleware([firstName, lastName, email, password]);
export const loginValidator = createValidatorMiddleware([email, password]);
