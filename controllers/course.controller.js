import { Course } from "../models/Course.js";
import { Roles, User } from "../models/User.js";
import GoogleCloudStorageService from "../services/file.storage.js";

class CourseController {
  async create(req, res) {
    try {
      const { title, description, level, teacherId } = req.body;

      const imageUrl = await GoogleCloudStorageService.uploadFile(req.file, "courses");

      const courseDetails = {
        title,
        description,
        level,
        imageUrl,
      };

      if (req.userRole === Roles.TEACHER) {
        courseDetails.teacher = req.userId;
      } else {
        courseDetails.teacher = teacherId;
      }

      const potentialTeacher = await User.findById(teacherId);

      if (potentialTeacher.role !== Roles.TEACHER) {
        return res.status(400).json({ message: "Вы в 'teacherId' указали id не учителя" });
      }

      const newCourse = await new Course(courseDetails).save();
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const courses = await Course.find().populate("teacher");
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new CourseController();
