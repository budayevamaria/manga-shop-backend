import { User } from "../models/User.js";
import { hashPassword } from "../services/bcrypt.js";

class UserController {
  async getMe(req, res) {
    try {
      const user = await User.findById(req.userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.find();

      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await hashPassword(password);
      const newUser = await new User({ name, email, password: hashedPassword }).save();

      res.status(201).json({ message: "Новый покупатель был добавлен", user: newUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const hashedPassword = await hashPassword(password);
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, password: hashedPassword },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "Данного покупателя нет" });
      }

      res.json({ message: "Покупатель обновлен", user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        res.status(404).json({ message: "Данного покупателя не существует" });
      }

      res.json({ message: "Покупатель удален" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
