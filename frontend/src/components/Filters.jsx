import { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const applyFilters = () => {
    onFilterChange({ category, minPrice, maxPrice });
  };

  return (
    <div className="flex gap-4 items-center">
      <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 rounded">
        <option value="">All Categories</option>
        <option value="tools">Tools</option>
        <option value="paint">Paint</option>
        <option value="plumbing">Plumbing</option>
      </select>
      <input type="number" placeholder="Min Price" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="border p-2 rounded w-24" />
      <input type="number" placeholder="Max Price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="border p-2 rounded w-24" />
      <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">Apply</button>
    </div>
  );
}
