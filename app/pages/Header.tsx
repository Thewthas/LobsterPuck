import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-cyan-200 text-sky-900 p-4 shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/home" className="flex items-end text-3xl font-bold text-sky-700">
        <span>Lobster Puck</span>
        <span className="text-xs text-black font-normal mb-1 ml-1">by ทิวทัศน์ แท่งทอง</span>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/hp" className="hover:text-sky-500 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-sky-500 transition duration-300">Menu</Link>
          </li>
          <li>
            <Link to="/abt" className="hover:text-sky-500 transition duration-300">About Us</Link>
          </li>
          <li>
            <Link to="/con" className="hover:text-sky-500 transition duration-300">Contact</Link>
          </li>
          <li>
            <Link to="/order" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full transition duration-300">
              Order Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;