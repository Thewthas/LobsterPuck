import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LobsterShop from "./pages/Index";
import MenuFull from "./pages/MenuFull";
import Homepage from "./pages/Homepage";
import Order from "./pages/Order";
import AboutusFull from "./pages/AboutusFull";
import ContactFull from "./pages/ContactFull";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LobsterShop />} />
        <Route path="/menu" element={<MenuFull />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/hp" element={<Homepage />} />
        <Route path="/abt" element={<AboutusFull />} />
        <Route path="/con" element={<ContactFull />} />
      </Routes>
    </Router>
  );
}

export default App;
