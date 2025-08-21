// src/components/Filters.jsx
import { useState } from "react";

export default function Filters({ categories = [], onApply }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");

  const apply = () => {
    onApply({
      q: q.trim(),
      category,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      rating: rating ? Number(rating) : undefined,
    });
  };

  return (
    <div className="bg-white p-4 mb-8 rounded-2xl shadow">
      <div className="flex flex-col md:flex-row md:items-end gap-3">
        <div className="flex-1">
          <label className="text-xs text-slate-600">Search</label>
          <input value={q} onChange={(e)=>setQ(e.target.value)} className="w-full border p-2 rounded mt-1" placeholder="Search drills, screws..." />
        </div>
        <div>
          <label className="text-xs text-slate-600">Category</label>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="block border p-2 rounded mt-1">
            <option value="">All</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-600">Min</label>
          <input type="number" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} className="w-28 border p-2 rounded mt-1" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Max</label>
          <input type="number" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} className="w-28 border p-2 rounded mt-1" />
        </div>
        <div>
          <label className="text-xs text-slate-600">Min rating</label>
          <select value={rating} onChange={(e)=>setRating(e.target.value)} className="block border p-2 rounded mt-1 w-28">
            <option value="">Any</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="4.5">4.5+</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button onClick={apply} className="bg-blue-600 text-white px-4 py-2 rounded">Apply</button>
          <button onClick={() => { setQ(""); setCategory(""); setMinPrice(""); setMaxPrice(""); setRating(""); onApply({}); }} className="px-4 py-2 rounded border">Reset</button>
        </div>
      </div>
    </div>
  );
}
