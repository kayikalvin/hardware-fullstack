import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import { fetchProducts } from "../api/products";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts({ page, filters }).then(data => {
      setProducts(data.products);
      setTotalPages(data.totalPages);
    });
  }, [page, filters]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <Filters onFilterChange={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
