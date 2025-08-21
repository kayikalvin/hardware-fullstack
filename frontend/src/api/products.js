// src/api/products.js
export async function fetchProducts({ page = 1, limit = 12, filters = {}, sort = "" }) {
  const params = new URLSearchParams();
  params.set("page", page);
  params.set("limit", limit);
  if (sort) params.set("sort", sort);

  // filters is an object like { q, category, minPrice, maxPrice, rating }
  Object.entries(filters).forEach(([k, v]) => {
    if (v !== undefined && v !== "" && v !== null) params.set(k, v);
  });

  const url = `${import.meta.env.VITE_API_BASE || "http://localhost:5000"}/api/products?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json(); // { products, totalPages, currentPage, total }
}

// Fetch categories for filters dropdown
export async function fetchCategories() {
  const url = `${import.meta.env.VITE_API_BASE || "http://localhost:5000"}/api/categories`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json(); // Returns [{_id, name}] or similar
}
