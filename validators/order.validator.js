import { body } from "express-validator";
import { createValidatorMiddleware } from "../middlewares/validator.middleware.js";

const items = body("items")
  .exists()
  .withMessage("Поле 'items' обязательно")
  .isArray({ min: 1 })
  .withMessage("Корзина не может быть пустой");

const product = body("items.*.product")
  .exists()
  .withMessage("Product обязателен")
  .isString()
  .withMessage("Product должен быть id (string)");

const quantity = body("items.*.quantity")
  .exists()
  .withMessage("Quantity обязателен")
  .isInt({ min: 1 })
  .withMessage("Quantity должен быть минимум 1");

const price = body("items.*.price")
  .exists()
  .withMessage("Price обязателен")
  .isFloat({ min: 0 })
  .withMessage("Price должен быть числом");

const totalPrice = body("totalPrice")
  .optional()
  .isFloat({ min: 0 })
  .withMessage("Total price должен быть числом");

export const orderValidator = createValidatorMiddleware([
  items,
  product,
  quantity,
  price,
  totalPrice,
]);
