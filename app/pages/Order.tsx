import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Order = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    menu: "",
    quantity: 1,
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ขอบคุณสำหรับการสั่งซื้อ! เราจะติดต่อกลับโดยเร็วที่สุด");
    // สามารถเพิ่ม logic ส่งข้อมูลไป backend ได้ที่นี่
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-cyan-50">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-sky-700 mb-6 text-center">สั่งซื้อกุ้งล็อบสเตอร์</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sky-900 mb-1">ชื่อ-นามสกุล</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
            <div>
              <label className="block text-sky-900 mb-1">เบอร์โทรศัพท์</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
            <div>
              <label className="block text-sky-900 mb-1">ที่อยู่สำหรับจัดส่ง</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
            <div>
              <label className="block text-sky-900 mb-1">เมนูที่ต้องการ</label>
              <select
                name="menu"
                value={form.menu}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                <option value="">-- กรุณาเลือกเมนู --</option>
                <option value="ล็อบสเตอร์ย่าง">ล็อบสเตอร์ย่าง</option>
                <option value="ล็อบสเตอร์อบชีส">ล็อบสเตอร์อบชีส</option>
                <option value="ล็อบสเตอร์ซาชิมิ">ล็อบสเตอร์ซาชิมิ</option>
                <option value="ล็อบสเตอร์ผัดพริกเกลือ">ล็อบสเตอร์ผัดพริกเกลือ</option>
                <option value="ล็อบสเตอร์อบวุ้นเส้น">ล็อบสเตอร์อบวุ้นเส้น</option>
                <option value="ล็อบสเตอร์เทอริยากิ">ล็อบสเตอร์เทอริยากิ</option>
                <option value="ล็อบสเตอร์นึ่งนมสด">ล็อบสเตอร์นึ่งนมสด</option>
                <option value="ล็อบสเตอร์ซาชิมิ (Maine)">ล็อบสเตอร์ซาชิมิ (Maine)</option>
                <option value="ล็อบสเตอร์ซาชิมิ (Canadian)">ล็อบสเตอร์ซาชิมิ (Canadian)</option>
              </select>
            </div>
            <div>
              <label className="block text-sky-900 mb-1">จำนวน</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                min={1}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
            <div>
              <label className="block text-sky-900 mb-1">หมายเหตุ (ถ้ามี)</label>
              <input
                type="text"
                name="note"
                value={form.note}
                onChange={handleChange}
                className="w-full border border-sky-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-full transition duration-300"
            >
              ยืนยันการสั่งซื้อ
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Order;