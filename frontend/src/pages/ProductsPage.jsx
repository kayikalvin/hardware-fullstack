// import { useEffect, useState } from "react";
// import { fetchProducts, fetchCategories } from "../api/products";
// import ProductCard from "../components/ProductCard";
// import Filters from "../components/Filters";
// import Pagination from "../components/Pagination";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filters, setFilters] = useState({});
//   const [page, setPage] = useState(1);
//   const [limit] = useState(12);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchCategories()
//       .then(setCategories)
//       .catch(() => setCategories([]));
//   }, []);

//   const load = async (params = {}) => {
//     try {
//       setLoading(true);
//       const resp = await fetchProducts({
//         page: params.page || page,
//         limit,
//         filters: params.filters ?? filters,
//         sort: params.sort || "",
//       });
//       setProducts(resp.products);
//       setTotalPages(resp.totalPages);
//       setPage(resp.currentPage || params.page || page);
//     } catch (err) {
//       console.error(err);
//       alert("Failed loading products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load({ page: 1, filters });
//   }, [filters]);

//   useEffect(() => {
//     load({ page });
//   }, [page]);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Products</h1>

//       <Filters
//         categories={categories}
//         onApply={(f) => { setFilters(f); setPage(1); }}
//       />

//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {loading ? (
//           <div className="col-span-full text-center py-10">Loading…</div>
//         ) : products.length ? (
//           products.map((p) => <ProductCard key={p._id || p.id} product={p} />)
//         ) : (
//           <div className="col-span-full text-center py-10">No products found.</div>
//         )}
//       </div>

//       <Pagination current={page} totalPages={totalPages} onChange={setPage} />
//     </div>
//   );
// }
import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/products?page=${page}&filters=${JSON.stringify(filters)}`);
      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
      const resp = await res.json();
      setProducts(Array.isArray(resp.products) ? resp.products : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [page, filters]);

  const loadCategories = useCallback(async () => {
    try {
      const res = await fetch("/api/categories");
      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
      const resp = await res.json();
      setCategories(Array.isArray(resp.categories) ? resp.categories : []);
    } catch (err) {
      console.error(err);
      setCategories([]);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>

      <Filters
        categories={Array.isArray(categories) ? categories : []}
        onApply={(f) => {
          setFilters(f);
          setPage(1);
        }}
      />

      {error && (
        <div className="text-red-500 bg-red-100 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {products.length > 0 ? (
            products.map((p) => (
              <ProductCard key={p._id || p.id || Math.random()} product={p} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      )}
    </div>
  );
}
