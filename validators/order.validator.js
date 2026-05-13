import { body, param } from "express-validator";
import { createValidatorMiddleware } from "../middlewares/validator.middleware.js";

const id = param("id").isMongoId().withMessage("Некорректный id заказа");

const status = body("status")
  .exists()
  .withMessage("Status обязателен")
  .isIn(["created", "paid", "shipped", "delivered"])
  .withMessage("Некорректный статус");

export const orderValidator = createValidatorMiddleware([id, status]);
