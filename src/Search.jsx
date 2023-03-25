import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from './assets/data.json';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setResults(filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="border border-gray-400 p-2 rounded-lg mb-4"
        placeholder="Search for a product"
      />
      <div className="flex flex-wrap justify-center">
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Search;
