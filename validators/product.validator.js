import { body } from "express-validator";
import { createValidatorMiddleware } from "../middlewares/validator.middleware.js";

const title = body("title")
  .exists()
  .withMessage("Поле 'title' обязательно")
  .isString()
  .withMessage("Поле 'title' должно быть строкой")
  .isLength({ min: 2 })
  .withMessage("Поле 'title' должно содержать минимум 2 символа");

const authors = body("authors")
  .exists()
  .withMessage("Поле 'authors' обязательно")
  .isArray({ min: 1 })
  .withMessage("Поле 'authors' должно быть массивом");

const chapters = body("chapters")
  .exists()
  .withMessage("Поле 'chapters' обязательно")
  .isInt({ min: 0 })
  .withMessage("Поле 'chapters' должно быть числом");

const volumes = body("volumes")
  .exists()
  .withMessage("Поле 'volumes' обязательно")
  .isInt({ min: 0 })
  .withMessage("Поле 'volumes' должно быть числом");

const price = body("price")
  .exists()
  .withMessage("Поле 'price' обязательно")
  .isFloat({ min: 0 })
  .withMessage("Поле 'price' должно быть числом");

const image = body("image")
  .exists()
  .withMessage("Поле 'image' обязательно")
  .isURL()
  .withMessage("Поле 'image' должно быть ссылкой");

export const productValidator = createValidatorMiddleware([
  title,
  authors,
  chapters,
  volumes,
  price,
  image,
]);
