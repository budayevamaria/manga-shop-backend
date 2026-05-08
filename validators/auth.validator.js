import { body } from "express-validator";
import { createValidatorMiddleware } from "../middlewares/validator.middleware.js";

const name = body("name")
  .exists()
  .withMessage("Поле 'name' обязательно")
  .isLength({ min: 2 })
  .withMessage("Поле 'name' должно содержать минимум 2 символа");

const email = body("email")
  .exists()
  .withMessage("Поле 'email' обязательно")
  .isString()
  .withMessage("Поле 'email' должно быть строчкой")
  .isEmail()
  .withMessage("Поле 'email' должно содержать символ '@'");

const password = body("password")
  .exists()
  .withMessage("Поле 'password' обязательно")
  .isStrongPassword()
  .withMessage(
    "Поле 'password' должно быть строчкой, которая содержит хотя бы 1 заглавную букву, 1 маленькую букву, 1 число и 1 специальный символ"
  );

export const registerValidator = createValidatorMiddleware([name, email, password]);
export const loginValidator = createValidatorMiddleware([email, password]);
