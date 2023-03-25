import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider= ({ children }) => {
  const [carts, setCarts] = useState([]);

  const contextValue = {
    carts,
    setCarts,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;