import Image from "next/image";
import React from "react";
import testing from "@/assets/image/testing.jpg";
import { clashDisplay } from "@/assets/image/fonts/font";

const Homepage = () => {
  return (
    <div className="relative w-full h-screen p-4">
      {/* Gambar sebagai background */}
      <Image
        src={testing}
        alt="image"
        className="w-full h-full object-cover  rounded-4xl"
        priority
      />

      {/* Overlay teks di tengah */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <h1
          className={`${clashDisplay.className} text-[96px] text-white font-bold text-center`}
        >
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
