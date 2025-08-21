// src/components/ProductCard.jsx
import { motion } from "framer-motion";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow p-2">
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">{product.name}</h3>
        <div className="text-sm text-slate-600">{product.brand} • {product.category}</div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-bold">KES {product.price.toLocaleString()}</div>
          <button onClick={() => onAddToCart && onAddToCart(product)} className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </div>
    </motion.div>
  );
}
