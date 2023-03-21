import React from "react";
import ProductCard from "./ProductCard";

const Cart = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>

      <div className="flex flex-wrap justify-center">
        <ProductCard />
      </div>
    </div>
  );
};

export default Cart;
