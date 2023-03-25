import React from "react";
import CartProvider from "./CartProvider";
import FavoriteProvider from "./FavoriteProvider";
import { BrowserRouter, Switch, Route } from 'react-router-dom';



import Routes from "./Routes";
const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <FavoriteProvider>
          <div className="bg-amazonOrange h-full">
            <Routes />
          </div>
        </FavoriteProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
