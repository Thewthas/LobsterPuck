import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import lobster01 from "../assets/images/lobster01.jpg";
import lobster02 from "../assets/images/lobster02.jpg";
import lobster03 from "../assets/images/lobster03.jpg";
import lobster04 from "../assets/images/lobster04.jpg";
import lobster05 from "../assets/images/lobster05.jpg";
import lobster06 from "../assets/images/lobster06.jpg";
import lobster07 from "../assets/images/lobster07.jpg";
import lobster08 from "../assets/images/lobster08.jpg";
import lobster09 from "../assets/images/lobster09.jpg";

const MenuFull = () => (
  <div className="font-sans antialiased text-gray-800 bg-white">
    <Header />
    <section className="py-20 bg-cyan-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold mb-12 text-sky-700">เมนูล็อบสเตอร์</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* เมนู1 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster01} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์ย่าง</h3>
              <p className="text-sky-900 mb-4">ล็อบสเตอร์สดย่างเนยกระเทียมหอม</p>
              <span className="text-3xl font-extrabold text-sky-500">฿999</span>
            </div>
          </div>
          {/* เมนู2 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster02} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์อบชีส</h3>
              <p className="text-sky-900 mb-4">ล็อบสเตอร์อบชีสเยิ้ม หอมมัน</p>
              <span className="text-3xl font-extrabold text-sky-500">฿1,200</span>
            </div>
          </div>
          {/* เมนู3 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster03} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์ซาชิมิ</h3>
              <p className="text-sky-900 mb-4">ล็อบสเตอร์สดเสิร์ฟแบบซาชิมิ</p>
              <span className="text-3xl font-extrabold text-sky-500">฿1,500</span>
            </div>
          </div>
          {/* เมนู4 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster04} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์ซาชิมิ (Maine)</h3>
                <p className="text-sky-900 mb-4">ล็อบสเตอร์สดพันธุ์ Maine เสิร์ฟแบบซาชิมิ เนื้อหวานกรอบ</p>
                <span className="text-3xl font-extrabold text-sky-500">฿1,700</span>
            </div>
            </div>
            {/* เมนู5 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster05} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์ซาชิมิ (Canadian)</h3>
                <p className="text-sky-900 mb-4">ล็อบสเตอร์สดพันธุ์ Canadian เนื้อแน่น เสิร์ฟเย็นกับวาซาบิ</p>
                <span className="text-3xl font-extrabold text-sky-500">฿1,800</span>
            </div>
            </div>
            {/* เมนู6 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster06} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์อบวุ้นเส้น</h3>
                <p className="text-sky-900 mb-4">ล็อบสเตอร์อบวุ้นเส้นสูตรพิเศษ หอมกลิ่นสมุนไพร</p>
                <span className="text-3xl font-extrabold text-sky-500">฿1,350</span>
            </div>
            </div>
            {/* เมนู7 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster07} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์ผัดพริกเกลือ</h3>
                <p className="text-sky-900 mb-4">ล็อบสเตอร์ผัดพริกเกลือ รสจัดจ้านสไตล์จีน</p>
                <span className="text-3xl font-extrabold text-sky-500">฿1,250</span>
            </div>
            </div>
            {/* เมนู8 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src={lobster08} alt="Lobster" className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์เทอริยากิ</h3>
                <p className="text-sky-900 mb-4">ล็อบสเตอร์ย่างราดซอสเทอริยากิ หอมหวานกลมกล่อม</p>
                <span className="text-3xl font-extrabold text-sky-500">฿1,400</span>
            </div>
            </div>
            {/* เมนู9 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img src={lobster09} alt="Lobster" className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-sky-700">ล็อบสเตอร์นึ่งนมสด</h3>
                    <p className="text-sky-900 mb-4">ล็อบสเตอร์นึ่งนมสด เนื้อนุ่มละมุนลิ้น</p>
                    <span className="text-3xl font-extrabold text-sky-500">฿1,350</span>
                </div>
            </div>
        </div>
      </div>
    </section>
    <Contact />
    <Footer />
  </div>
);

export default MenuFull;