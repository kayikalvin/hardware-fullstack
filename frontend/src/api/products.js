export async function fetchProducts({ page = 1, limit = 12, filters = {} }) {
  const query = new URLSearchParams({
    page,
    limit,
    ...filters,
  }).toString();

  const response = await fetch(`http://localhost:5000/api/products?${query}`);
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}
