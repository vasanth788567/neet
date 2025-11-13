import { useState } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import { products as productData } from '../data/products';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const onAddToCart = (productName) => {
    console.log(`Added to cart: ${productName}`);
  };

  let filtered = productData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === '' || p.category === category)
  );

  if (sort === 'priceLow') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'priceHigh') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const categories = [...new Set(productData.map(p => p.category))];

  return (
    <div className="p-4">
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;