import React from "react";
import lobster01 from "../assets/images/lobster01.jpg";
import lobster02 from "../assets/images/lobster02.jpg";
import lobster03 from "../assets/images/lobster03.jpg";

const Menu = () => (
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
      </div>
    </div>
  </section>
);

export default Menu;