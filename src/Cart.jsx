
import ProductCard from "./ProductCard";
import React, { useContext } from "react";
import CartContext from "./CartContext";
import products from "./assets/data.json";

  const Cart= () => {
    const { carts, setCarts } = useContext(CartContext);
    const filteredProducts = products.filter((product) =>
      carts.includes(product.id)
    );
  
  return (
    <div className="flex flex-wrap justify-center">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
