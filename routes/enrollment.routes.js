import { Router } from "express";
import EnrollmentController from "../controllers/enrollment.controller.js";
import { requireAuth, allowRoles } from "../middlewares/auth.middleware.js";
import { Roles } from "../models/User.js";

const router = Router();

router.post("/:id", requireAuth, allowRoles(Roles.STUDENT), EnrollmentController.create);
router.get("/", requireAuth, allowRoles(Roles.STUDENT), EnrollmentController.getMyEnrollments);

export default router;
