import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import ProductController from "../controllers/product.controller.js";

const router = Router();

router.post("/", requireAuth, ProductController.create);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.patch("/:id", requireAuth, ProductController.update);
router.delete("/:id", requireAuth, ProductController.delete);

export default router;
