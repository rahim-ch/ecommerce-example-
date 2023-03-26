import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
  return (
    <nav className=" flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <Link to="/" className="text-3xl font-bold font-heading">
          E-commerce App
        </Link>
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/favorites" className="hover:text-gray-200">Favorites</Link></li>
          <li><Link to="/cart" className="hover:text-gray-200">Cart</Link></li>
          <li><a className="hover:text-gray-200" href="#">Catagory</a></li>
          <li><a className="hover:text-gray-200" href="#">Collections</a></li>
          <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
        </ul>
        <div className="hidden xl:flex items-center space-x-5 ">
          <a className="hover:text-gray-200" href="#">
            <i className="fa fa-heart"></i>
          </a>
          <a className="hover:text-gray-200" href="#">
            <i className="fa fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
