import { Button } from "@/components/ui/button";
import React from "react";
import { clashDisplay } from "@/assets/fonts/font";
import project1 from "@/assets/image/Image (1).jpg";
import project2 from "@/assets/image/puskesmas.jpg";
import project3 from "@/assets/image/Code.jpg";
import project4 from "@/assets/image/kue.png";
import Carousel from "@/components/ui/carousel";
const slideData = [
  {
    title:
      "Starlink Network Configuration & Multi-Zone Access Point Distribution",
    description: "View On Github",
    github: "#",
    src: project1,
  },
  {
    title: "Expert System to Diagnose Tuberculosis Disease",
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
    title: "Melino Bakery",
    description: "View On Github",
    github: "https://kue-manja.vercel.app/",
    src: project4,
  },
];
const Project = () => {
  return (
    <div className="w-full min-h-screen px-8 py-12 overflow-hidden">
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-base">
            <span>[1]</span> What i do?
          </div>
          <div
            className={`${clashDisplay.className} text-[63px] max-w-5xl font-bold text-gray-800 mb-4`}
          >
            Crafting Solutions, From Infrastructure to Innovation
          </div>
        </div>
        <Button
          variant="default"
          className={`${clashDisplay.className} text-white cursor-pointer relative z-10 text-4xl p-10`}
        >
          View All
        </Button>
      </div>
      <div className="flex items-center justify-center gap-5 p-12">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default Project;
