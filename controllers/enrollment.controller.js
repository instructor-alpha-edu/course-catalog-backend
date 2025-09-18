import { Enrollment } from "../models/Enrollment.js";

class EnrollmentController {
  async create(req, res) {
    try {
      const { id } = req.params;
      const newEnrollment = await new Enrollment({ student: req.userId, course: id }).save();
      res.status(201).json(newEnrollment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMyEnrollments(req, res) {
    try {
      const response = await Enrollment.find({ student: req.userId }).populate({
        path: "course",
        populate: {
          path: "teacher",
        },
      });
      const courses = response.map(item => item.course);
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new EnrollmentController();
