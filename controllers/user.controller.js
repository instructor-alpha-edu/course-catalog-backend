import { User, Roles } from "../models/User.js";

class UserController {
  async makeTeacher(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: { role: Roles.TEACHER },
        },
        { new: true }
      );

      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMe(req, res) {
    try {
      const user = await User.findById(req.userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
