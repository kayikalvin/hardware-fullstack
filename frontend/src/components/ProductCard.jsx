import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow p-4 hover:shadow-lg"
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
    </motion.div>
  );
}
