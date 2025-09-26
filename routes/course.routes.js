import { Router } from "express";
import CourseController from "../controllers/course.controller.js";
import { allowRoles, requireAuth } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { createCourseValidator } from "../validators/course.validator.js";
import { requireImage } from "../validators/image.validator.js";
import { Roles } from "../models/User.js";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  requireAuth,
  allowRoles(Roles.TEACHER, Roles.ADMIN),
  createCourseValidator,
  requireImage,
  CourseController.create
);
router.get("/", CourseController.getAll);

export default router;
