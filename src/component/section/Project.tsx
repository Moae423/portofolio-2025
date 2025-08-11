import { Button } from "@/components/ui/button";
import React from "react";
import { clashDisplay } from "@/assets/fonts/font";
import CardsProjects from "../Projects/Cards";

const Project = () => {
  return (
    <div className="w-full h-screen p-8">
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-base"><span>[1]</span> What i do?</div>
          <div
            className={`${clashDisplay.className} text-[63px] max-w-7xl font-bold text-gray-800 mb-4`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
        </div>
        <Button
          variant="default"
          className={`${clashDisplay.className} text-white cursor-pointer relative z-10 text-4xl p-10`}
        >
          View All
        </Button>
      </div>
      <div className="flex items-center justify-center gap-5">
        <CardsProjects />
        <CardsProjects />
        <CardsProjects />
      </div>
    </div>
  );
};

export default Project;
