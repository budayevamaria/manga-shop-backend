import { Router } from "express";
import { requireAuth } from "../middlewares/auth.middleware.js";
import UserController from "../controllers/user.controller.js";

const router = Router();

router.get("/me", requireAuth, UserController.getMe);
router.get("/", requireAuth, UserController.getAll);
router.post("/", requireAuth, UserController.create);
router.patch("/:id", requireAuth, UserController.update);
router.delete("/:id", requireAuth, UserController.delete);

export default router;
