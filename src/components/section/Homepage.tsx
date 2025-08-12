"use client";
import Image from "next/image";
import testing from "@/assets/image/testing.jpg";
import { clashDisplay } from "@/assets/fonts/font";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";

const Homepage = () => {
  return (
    <div className="relative w-full h-screen p-2 sm:p-4">
      {/* Gambar sebagai background */}
      <Image
        src={testing}
        loading="eager"
        alt="image"
        className="w-full h-full object-cover rounded-2xl sm:rounded-4xl"
        priority
      />

      {/* Overlay teks */}
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 bg-black/40 p-4 sm:p-10 m-2 sm:m-4 rounded-2xl sm:rounded-4xl">
        <h1
          className={`${clashDisplay.className} text-4xl sm:text-6xl lg:text-[96px] text-white font-bold text-start md:text-center leading-tight sm:leading-[1.2]`}
        >
          Turning Vision Into Reality
        </h1>
        <p className="max-w-xl sm:max-w-4xl text-start md:text-center text-sm sm:text-base lg:text-lg text-gray-200 px-2 sm:px-0">
          I am an Information Systems fresh graduate from Universitas Putra
          Indonesia “YPTK” Padang with practical experience in computer
          networking and web development. Proficient in managing and configuring
          network infrastructure using Mikrotik and other technologies, and
          currently expanding expertise in full stack web development.
        </p>
        <Button
          variant="default"
          className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base hover:bg-white/90 text-white cursor-pointer relative z-10 hover:text-black hover:scale-105 active:scale-100 transition-all ease-in-out duration-300"
        >
          <BriefcaseBusiness className="w-4 h-4" />
          Hire Me
        </Button>
      </div>
    </div>
  );
};
export default Homepage;
