import Image from "next/image";
import React from "react";
import fotoSaya from "@/assets/image/Foto saya.jpeg";
import { clashDisplay } from "@/assets/fonts/font";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const experiences = [
  {
    year: "2024",
    title: "Network Team Lead",
    company: "SDN 03 Pakan Kurai",
    description: [
      "Implemented and managed the school's network infrastructure.",
      "Coordinated the network team to ensure optimal performance and security.",
      "Handled network access, performance monitoring, and technical troubleshooting.",
    ],
  },
  {
    year: "2022",
    title: "Network Engineer",
    company: "SDN 14 ATTS",
    description: [
      "Setup and managed school network infrastructure",
      "Installed network systems for final examinations and outdoor connectivity for stable access.",
    ],
  },
  {
    year: "2019",
    title: "Internship Network Engineer",
    company: "PT Telkom Indonesia (STO Payakumbuh)",
    description: [
      "Configured Optical Network Terminal (ONT) with fiber optic connections",
      "Managed Switch/Hub devices and handled relocation of networking hardware between locations.",
    ],
  },
];

const Stories = () => {
  return (
    <div className="w-full min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="text-sm sm:text-base text-muted-foreground font-mono">
              [3] Experience
            </div>
            <h2
              className={`${clashDisplay.className} text-3xl xs:text-4xl sm:text-5xl font-bold`}
            >
              My Experience
            </h2>
          </div>

          {/* Image Section - Mobile */}
          <div className="flex justify-center">
            <Image
              src={fotoSaya}
              alt="Daffa Rihadatul Fairus - Professional Photo"
              loading="lazy"
              className="w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 object-cover rounded-2xl sm:rounded-3xl 
                       hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
            />
          </div>

          {/* Timeline Section - Mobile */}
          <div className="relative border-l-2 border-muted-foreground/30 pl-4 sm:pl-6 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 relative">
                {/* Timeline Dot */}
                <span className="absolute -left-6 sm:-left-8 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary border-2 border-background shadow-sm"></span>

                <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1 xs:gap-2">
                      <CardTitle className="text-lg sm:text-xl">
                        {exp.title}
                      </CardTitle>
                      <span className="text-xs sm:text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-full w-fit">
                        {exp.year}
                      </span>
                    </div>
                    <CardDescription className="text-sm sm:text-base">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base text-muted-foreground">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center min-h-screen gap-8 xl:gap-12 2xl:gap-16">
          {/* Image Section - Desktop */}
          <div className="flex-shrink-0">
            <Image
              src={fotoSaya}
              alt="Daffa Rihadatul Fairus - Professional Photo"
              loading="lazy"
              className="w-full h-full xl:w-96 xl:h-96 2xl:w-[40rem] 2xl:h-[40rem] object-cover rounded-2xl xl:rounded-3xl 
                       hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl"
            />
          </div>

          {/* Content Section - Desktop */}
          <div className="flex-1 max-w-3xl">
            {/* Header */}
            <div className="mb-8 xl:mb-12">
              <div className="text-base xl:text-lg text-muted-foreground font-mono mb-3">
                [3] Experience
              </div>
              <h2
                className={`${clashDisplay.className} text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6`}
              >
                My Experience
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-muted-foreground/30 pl-8">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-10 xl:mb-12 relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-11 top-3 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg"></span>

                  <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl xl:text-2xl">
                          {exp.title}
                        </CardTitle>
                        <span className="text-sm xl:text-base text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                      </div>
                      <CardDescription className="text-base xl:text-lg">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-6 space-y-3 text-base xl:text-lg text-muted-foreground">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="leading-relaxed">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden xl:block absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="hidden xl:block absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Stories;
