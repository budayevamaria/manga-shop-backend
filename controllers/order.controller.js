import { Order } from "../models/Order.js";
import { Cart } from "../models/Cart.js";

class OrderController {
  async create(req, res) {
    try {
      const cart = await Cart.findOne({ user: req.userId }).populate("items.product");

      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: "Корзина пуста" });
      }

      const orderItems = cart.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      }));

      const totalPrice = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      const order = await Order.create({
        user: req.userId,
        items: orderItems,
        totalPrice,
      });

      cart.items = [];
      await cart.save();

      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const orders = await Order.find({ user: req.userId }).populate("items.product");

      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const order = await Order.findById(req.params.id).populate("items.product");

      if (!order) {
        return res.status(404).json({ message: "Заказ не найден" });
      }

      if (order.user.toString() !== req.userId) {
        return res.status(403).json({ message: "Доступ запрещен" });
      }

      return res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const order = await Order.findByIdAndUpdate(id, { status }, { new: true });

      if (!order) {
        return res.status(404).json({ message: "Заказ не найден" });
      }

      res.json({ message: "Статус заказа обновлен" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedOrder = await Order.findByIdAndDelete(id);

      if (!deletedOrder) {
        res.status(404).json({ message: "Данного заказа не существует" });
      }

      res.json({ message: "Заказ удален" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new OrderController();
