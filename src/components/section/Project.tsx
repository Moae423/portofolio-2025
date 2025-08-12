"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { clashDisplay } from "@/assets/fonts/font";
import project1 from "@/assets/image/Image (1).jpg";
import project2 from "@/assets/image/puskesmas.jpg";
import project3 from "@/assets/image/Code.jpg";
import project4 from "@/assets/image/kue.png";
import Carousel from "@/components/ui/carousel";
import { BriefcaseBusiness } from "lucide-react";

const slideData = [
  {
    title:
      "Starlink Network Configuration & Multi-Zone Access Point Distribution",
    description: "View On Github",
    github: "#",
    src: project1,
  },
  {
    title: "Expert System to Diagnose Tuberculosis Disease With Laravel",
    description: "View On Github",
    github: "https://github.com/Moae423/sistemPakarTB-20052",
    src: project2,
  },
  {
    title: "System Inventory Backend System (RESTFul API)",
    description: "View On Github",
    github: "https://github.com/Moae423/backend-visca",
    src: project3,
  },
  {
    title: "Melino Bakery - UMKM Website",
    description: "View On Github",
    github: "https://kue-manja.vercel.app/",
    src: project4,
  },
];

const Project = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 overflow-hidden lg:block">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between text-center lg:text-left gap-6">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="text-sm sm:text-base">
            <span>[1]</span> What I do?
          </div>
          <div
            className={`${clashDisplay.className} text-3xl sm:text-4xl md:text-5xl lg:text-[63px] max-w-5xl font-bold mb-4`}
          >
            Crafting Solutions, From Infrastructure to Innovation
          </div>
        </div>

        <Button
          variant="default"
          className={`${clashDisplay.className} text-white cursor-pointer relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8 flex items-center gap-3`}
        >
          <BriefcaseBusiness className="w-12 h-12 shrink-0" />
          Hire Me
        </Button>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 md:p-12">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default Project;
