import React from "react";
export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(product.name);
  };
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <p>⭐ {product.rating}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}