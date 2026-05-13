import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { productValidator } from "../validators/product.validator.js";
import ProductController from "../controllers/product.controller.js";

const router = Router();

router.post("/", requireAuth, productValidator, ProductController.create);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.patch("/:id", requireAuth, productValidator, ProductController.update);
router.delete("/:id", requireAuth, ProductController.delete);

export default router;
