import { Router } from "express";
import CartController from "../controllers/cart.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", requireAuth, CartController.getCart);
router.post("/add", requireAuth, CartController.addToCart);
router.delete("/:productId", requireAuth, CartController.removeItem);
router.delete("/", requireAuth, CartController.clearCart);

export default router;
