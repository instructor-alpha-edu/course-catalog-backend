import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";

const router = Router();

router.post("/register", registerValidator, AuthController.register);
router.post("/login", loginValidator, AuthController.login);

export default router;
