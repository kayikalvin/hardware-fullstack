import ProductModel from "../models/Product.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await ProductModel.distinct("category");
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};