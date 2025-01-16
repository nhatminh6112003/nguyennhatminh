import { Request, Response } from "express";
import { Product } from "../models/Product";

export class ProductController {
  // Create product
  async create(req: Request, res: Response) {
    try {
      const { name, description, price } = req.body;
      const product = Product.create({
        name,
        description,
        price,
        createdAt: new Date(),
      });
      await product.save();
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Error creating product" });
    }
  }

  // Get all products with filters
  async getAll(req: Request, res: Response) {
    try {
      const { minPrice, maxPrice } = req.query;
      let query = Product.createQueryBuilder("product");

      if (minPrice) {
        query = query.andWhere("product.price >= :minPrice", { minPrice });
      }
      if (maxPrice) {
        query = query.andWhere("product.price <= :maxPrice", { maxPrice });
      }

      const products = await query.getMany();
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching products" });
    }
  }

  // Get product by ID
  async getOne(req: Request, res: Response) {
    try {
      const product = await Product.findOne(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching product" });
    }
  }

  // Update product
  async update(req: Request, res: Response) {
    try {
      const product = await Product.findOne(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });

      Product.merge(product, req.body);
      const results = await product.save();
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ error: "Error updating product" });
    }
  }

  // Delete product
  async delete(req: Request, res: Response) {
    try {
      const product = await Product.findOne(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });

      await product.remove();
      return res.status(200).json({ message: "Delete success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error deleting product" });
    }
  }
}
