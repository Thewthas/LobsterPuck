import React from "react";

const Footer = () => (
  <footer className="bg-cyan-200 text-sky-900 p-8 text-center">
    <div className="container mx-auto">
      <p>&copy; 2000 BC Lobster Puck. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:text-sky-500 transition duration-300">Facebook</a>
        <a href="#" className="hover:text-sky-500 transition duration-300">Instagram</a>
        <a href="#" className="hover:text-sky-500 transition duration-300">Line Official</a>
      </div>
    </div>
  </footer>
);

export default Footer;