import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, index: true },
  category: String,
  price: Number,
  brand: String,
  stock: Number,
  description: String,
  image: String,
  rating: { type: Number, default: 0 },
}, { timestamps: true });


// For production, add text index for full-text search:
productSchema.index({ name: "text", description: "text", brand: "text" });


export default mongoose.model("Product", productSchema);
