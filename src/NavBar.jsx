import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const Navbar = () => {
  const [carts, setCarts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    setCartCount(carts.length);
  }, [carts, cartCount]);

  useEffect(() => {
    setFavoriteCount(favorites.length);
  }, [favorites, favoriteCount]);

  const addToCart = (item) => {
    setCarts([...carts, item]);
    setCartCount(cartCount + 1);
  };

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
    setFavoriteCount(favoriteCount + 1);
  };

  return (
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <Link to="/" className="text-3xl font-bold font-heading">
          E-commerce App
        </Link>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">
              Category
            </a>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-200 relative">
              <i className="fas fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center absolute -top-1 -right-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:text-gray-200 relative">
              <i className="fas fa-heart"></i>
              {favoriteCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center absolute -top-1 -right-1">
                  {favoriteCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
