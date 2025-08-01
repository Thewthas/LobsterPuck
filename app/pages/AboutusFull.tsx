import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import group from "../assets/images/group.jpg";

const AboutusFull = () => (
  <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
    <Header />
    {/* main ครอบเฉพาะเนื้อหาและคลื่นน้ำ */}
    <main className="relative bg-white overflow-hidden">
      {/* Gradient vignette */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 60%, rgba(0,0,0,0) 60%, rgba(56,189,248,0.45) 100%)",
        }}
      />
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-sky-700">เรื่องราวของเรา</h2>
        <p className="text-xl text-sky-900 mb-8 max-w-3xl mx-auto">
          Lobster Puck เกิดจากความรักในรสชาติของทะเลและความตั้งใจที่จะส่งต่อความสดใหม่ของกุ้งล็อบสเตอร์ถึงทุกบ้าน  
          เราคัดสรรวัตถุดิบคุณภาพสูงจากทะเลไทยและต่างประเทศ พร้อมทีมงานที่ใส่ใจในทุกขั้นตอน  
          เพื่อให้คุณมั่นใจในความสด สะอาด และปลอดภัยในทุกคำที่ลิ้มลอง
        </p>
        <div className="flex justify-center mb-10">
          <img
            src={group}
            alt="ทีมงาน Lobster Puck"
            className="rounded-xl shadow-xl w-full max-w-xl object-cover"
          />
        </div>
        <p className="text-lg text-sky-800 max-w-2xl mx-auto">
          เราเชื่อว่าความสุขเริ่มต้นจากอาหารดี ๆ  
          ขอขอบคุณลูกค้าทุกท่านที่ไว้วางใจให้เราได้ดูแลมื้อพิเศษของคุณ  
          <br />
          <span className="font-semibold text-sky-600">Lobster Puck - สดจากทะเล ถึงมือคุณ</span>
        </p>
      </section>
      {/* คลื่นน้ำสีฟ้า */}
      <div className="absolute left-0 right-0 bottom-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
          <path
            fill="#bae6fd"
            d="M0,80 C360,180 1080,0 1440,100 L1440,180 L0,180 Z"
          />
          <path
            fill="#38bdf8"
            fillOpacity="0.5"
            d="M0,120 C480,40 960,200 1440,80 L1440,180 L0,180 Z"
          />
        </svg>
      </div>
    </main>
    {/* Contact และ Footer อยู่นอก main */}
    <Contact />
    <Footer />
  </div>
);

export default AboutusFull;