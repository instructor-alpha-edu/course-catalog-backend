import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { requireAuth, allowRoles } from "../middlewares/auth.middleware.js";
import { Roles } from "../models/User.js";

const router = Router();

router.patch("/make/teacher/:id", requireAuth, allowRoles(Roles.ADMIN), UserController.makeTeacher);
router.get("/me", requireAuth, UserController.getMe);

export default router;
