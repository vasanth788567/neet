import React, { useState } from "react";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState(""); // "price-asc", "price-desc", "rating"
  
  // Search filter
  let filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) && 
    (category === "All" || p.category === category)
  );
  
  // Sorting
  if (sort === "price-asc")
    filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc")
    filtered.sort((a, b) => b.price - a.price);
  else if (sort === "rating")
    filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <Navbar />
      <div className="header">
        <h1>Product Listing</h1>
      </div>
      <FilterBar category={category} setCategory={setCategory} sort={sort} setSort={setSort} />
      <SearchBar search={search} setSearch={setSearch} />
      <ProductGrid products={filtered} />
    </div>
  );
}

export default App;