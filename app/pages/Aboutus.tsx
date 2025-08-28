import React from "react";
import Prem from "../assets/images/Prem.gif";

const AboutUs = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-5xl font-extrabold mb-8 text-sky-700">เรื่องราวของเรา</h2>
      <p className="text-xl leading-relaxed max-w-3xl mx-auto text-sky-900">
        เราคัดสรรกุ้งล็อบสเตอร์สดใหม่จากทะเลทุกวัน เพื่อให้คุณได้สัมผัสรสชาติที่ดีที่สุด
        พร้อมบริการส่งถึงบ้าน แม้แต่ในมหานครโอลิมปัส!
      </p>
      <div className="mt-12">
        <img src={Prem} alt="Fishing Boat" className="mx-auto rounded-lg shadow-xl" />
      </div>
    </div>
  </section>
);

export default AboutUs;