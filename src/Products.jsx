import React from 'react';
import ProductCard from './ProductCard';
import products from './assets/data.json';

const Products = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;