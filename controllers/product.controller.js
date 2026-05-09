import { Product } from "../models/Product.js";

class ProductController {
  async create(req, res) {
    try {
      const { title, authors, chapters, volumes, status, price, image } = req.body;
      const newProduct = await new Product({
        title,
        authors,
        chapters,
        volumes,
        status,
        price,
        image,
      }).save();

      res.status(201).json({ message: "Новая манга добавлена", product: newProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await Product.find();

      if (!products.length) {
        return res.status(404).json({ message: "Список манг пуст" });
      }

      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({ message: "Данной манги нет" });
      }

      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, authors, chapters, volumes, status, price, image } = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { title, authors, chapters, volumes, status, price, image },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: "Данной манги нет" });
      }

      res.json({ message: "Манга обновлена", product: updatedProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedProduct = await Product.findByIdAndDelete(id);

      if (!deletedProduct) {
        return res.status(404).json({ message: "Данной манги нет" });
      }

      res.json({ message: "Манга удалена" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ProductController();
