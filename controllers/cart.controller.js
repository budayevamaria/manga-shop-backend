import { Cart } from "../models/Cart.js";
import { User } from "../models/User.js";
import { Product } from "../models/Product.js";

class CartController {
  async getCart(req, res) {
    try {
      let cart = await Cart.findOne({ user: req.userId }).populate("items.product");

      if (!cart) {
        cart = await Cart.create({
          user: req.userId,
          items: [],
        });
      }

      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addToCart(req, res) {
    try {
      const { productId, quantity } = req.body;

      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ message: "Манга не найдена" });
      }

      let cart = await Cart.findOne({ user: req.userId });

      if (!cart) {
        cart = await Cart.create({
          user: req.userId,
          items: [],
        });
      }

      const existingItem = cart.items.find(item => item.product.toString() === productId);

      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        cart.items.push({
          product: productId,
          quantity: quantity || 1,
        });
      }

      await cart.save();

      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async removeItem(req, res) {
    try {
      const { productId } = req.params;

      const cart = await Cart.findOne({ user: req.userId });

      if (!cart) {
        return res.status(404).json({ message: "Корзина не найдена" });
      }

      cart.items = cart.items.filter(item => item.product.toString() !== productId);

      await cart.save();

      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async clearCart(req, res) {
    try {
      await Cart.findOneAndUpdate({ user: req.userId }, { items: [] });

      res.json({ message: "Корзина очищена" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new CartController();
