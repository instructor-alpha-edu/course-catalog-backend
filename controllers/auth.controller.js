import { User } from "../models/User.js";
import { hashPassword, isValidPassword } from "../services/bcrypt.js";
import { generateToken } from "../services/jwt.js";

class AuthController {
  async register(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;

      const emailAlreadyExists = await User.findOne({ email });
      if (emailAlreadyExists) {
        return res.status(409).json({ message: "Данная электронная почта уже занята" });
      }

      const hashedPassword = await hashPassword(password);

      const newUser = await new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      }).save();

      res.status(201).json({ message: "Новый студент был успешно зарегистрирован", user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Вы ввели неверный email или пароль" });
      }

      const passwordIsValid = await isValidPassword(password, user.password);
      if (!passwordIsValid) {
        return res.status(400).json({ message: "Вы ввели неверный email или пароль" });
      }

      const token = generateToken({ user: { id: user._id, role: user.role } });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthController();
