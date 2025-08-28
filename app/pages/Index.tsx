import React from "react";
import Header from "./Header";
import MSSection from "./MSSection";
import AboutUs from "./Aboutus";
import Menu from "./Menu";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./Footer";

const LobsterShop = () => (
  <div className="font-sans antialiased text-gray-800 bg-white">
    <Header />
    <MSSection />
    <AboutUs />
    <Menu />
    <Review />
    <Contact />
    <Footer />
  </div>
);

export default LobsterShop;