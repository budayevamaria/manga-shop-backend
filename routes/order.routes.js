import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { orderValidator } from "../validators/order.validator.js";
import OrderController from "../controllers/order.controller.js";

const router = Router();

router.post("/", requireAuth, OrderController.create);
router.get("/", requireAuth, OrderController.getAll);
router.get("/:id", requireAuth, OrderController.getById);
router.patch("/:id", requireAuth, orderValidator, OrderController.updateStatus);
router.delete("/:id", requireAuth, OrderController.delete);

export default router;
