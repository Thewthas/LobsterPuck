import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import lobstergal01 from "../assets/images/lobstergal01.jpg";
import lobstergal02 from "../assets/images/lobstergal02.jpg";
import lobstergal03 from "../assets/images/lobstergal03.jpg";
import lobstergal04 from "../assets/images/lobstergal04.jpg";
import lobstergal05 from "../assets/images/lobstergal05.jpg";

const galleryImages = [
  lobstergal01,
  lobstergal02,
  lobstergal03,
  lobstergal04,
  lobstergal05,
];

const galleryText = [
  "ล็อบสเตอร์สดใหม่ทุกวัน",
  "ส่งตรงถึงบ้านคุณ",
  "เมนูพิเศษจากเชฟมืออาชีพ",
  "ประสบการณ์ซีฟู้ดระดับพรีเมียม",
  "สด สะอาด ปลอดภัย",
  "สั่งง่าย ส่งไว ประทับใจทุกคำ",
];

const FADE_DURATION = 500; // ms

const Homepage = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const safeShowImage = (idx: number) => {
    setFade(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, FADE_DURATION);
  };

  const prevImage = () => {
    safeShowImage(current === 0 ? galleryImages.length - 1 : current - 1);
  };

  const nextImage = () => {
    safeShowImage(current === galleryImages.length - 1 ? 0 : current + 1);
  };

  // auto slide พร้อม fade in
  useEffect(() => {
    const interval = setInterval(() => {
      safeShowImage(current === galleryImages.length - 1 ? 0 : current + 1);
    }, 3500);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [current]);

  return (
    <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-cyan-50">
        <div className="relative w-full max-w-5xl h-[600px] flex items-center justify-center">
          <img
            src={galleryImages[current]}
            alt={`Lobster Gallery ${current + 1}`}
            className={`w-full h-full object-cover rounded-xl shadow-2xl transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            draggable={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`bg-black bg-opacity-40 text-white text-lg px-6 py-2 rounded-full transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
              {galleryText[current % galleryText.length]} <span className="text-xs ml-2">Lobster Puck</span>
            </span>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-sky-700 rounded-full p-2 shadow-lg"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-sky-700 rounded-full p-2 shadow-lg"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;