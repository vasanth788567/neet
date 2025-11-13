import React from "react";

const categories = ["All", "Men", "Women", "Child"];
export default function FilterBar({ category, setCategory, sort, setSort }) {
  return (
    <div className="filter-bar">
      {/* Category Filter */}
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => <option key={cat}>{cat}</option>)}
      </select>
      {/* Sorting */}
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="price-asc">Price Low-High</option>
        <option value="price-desc">Price High-Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}