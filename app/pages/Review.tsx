import React from "react";

const Review = () => (
    <section className="py-20 bg-cyan-100">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-5xl font-extrabold mb-12 text-sky-700">รีวิวจากลูกค้า</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <p className="text-lg italic text-sky-900 mb-4">
            "แซ่บหลาย ล็อบสเตอร์ตัวใหญ่มาก จนแทบอยากฟังเพลง "รักไกลแบบติดปั๊ก" เลย!"
          </p>
          <p className="font-bold text-sky-700">- ชมรมคนรักเปรม, กรุงเทพฯ</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <p className="text-lg italic text-sky-900 mb-4">
            "สั่งมาหลายครั้งแล้ว ไม่เคยผิดหวังเลยครับ ล็อบสเตอร์ตัวใหญ่ เนื้อแน่น หวานฉ่ำ คุ้มค่ามาก!"
          </p>
          <p className="font-bold text-sky-700">- คุณวราภรณ์, บ้านฉาง</p>
        </div>
      </div>
    </div>
  </section>
);

export default Review;