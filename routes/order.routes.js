import { Router } from "express";
import OrderController from "../controllers/order.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", requireAuth, OrderController.create);
router.get("/", requireAuth, OrderController.getAll);
router.get("/:id", requireAuth, OrderController.getById);

export default router;
