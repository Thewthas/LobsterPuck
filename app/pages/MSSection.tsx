import React from "react";
import { Link } from "react-router";

const MSSection = () => (
  <section className="relative h-screen bg-cyan-100 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 via-cyan-100 to-white opacity-90"></div>
    <div className="relative z-10 text-center">
      <h1 className="text-6xl font-extrabold text-sky-700 mb-4 drop-shadow-lg">
        สดจากทะเล <br /> กุ้งล็อบสเตอร์คุณภาพ!
      </h1>
      <p className="text-xl text-sky-900 mb-8 max-w-2xl mx-auto drop-shadow-md">
        ส่งตรงล็อบสเตอร์สดใหม่จากทะเลถึงหน้าบ้านคุณ
      </p>
      <Link
        to="/order"
        className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition duration-300 inline-block">
        สั่งล็อบสเตอร์เลย!
      </Link>
    </div>
  </section>
);

export default MSSection;