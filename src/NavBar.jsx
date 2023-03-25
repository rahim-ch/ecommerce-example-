import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';


const Navbar = () => {
  return (
    <nav >
    

      <Link to="/" className="text-2xl font-bold">
        E-commerce App
      </Link>
      <Link to="/favorites" className="mx-2">
        <i className="fa fa-heart"></i>
      </Link>
      <Link to="/cart" className="mx-2">
        <i className="fa fa-shopping-cart"></i>
      </Link>
    
    </nav>
  );
};

export default Navbar;
