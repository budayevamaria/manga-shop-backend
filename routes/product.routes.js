import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const router = Router();

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.patch("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
