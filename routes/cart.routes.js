import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import CartController from "../controllers/cart.controller.js";

const router = Router();

router.get("/", requireAuth, CartController.getCart);
router.post("/add", requireAuth, CartController.addToCart);
router.patch("/:productId", requireAuth, CartController.updateQuantity);
router.delete("/:productId", requireAuth, CartController.removeItem);
router.delete("/", requireAuth, CartController.clearCart);

export default router;
