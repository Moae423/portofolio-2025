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
      "Implemented and managed the school’s network infrastructure.",
      "Coordinated the network team to ensure optimal performance and security.",
      "Handlednetwork access, performance monitoring, and technical troubleshooting.",
    ],
  },
  {
    year: "2022",
    title: "Network Engineer",
    company: "SDN 14 ATTS",
    description: [
      "setup and managed school network infrastructure",
      " Installed network systems for final examinations and outdoor connectivity for stable access.",
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
    <div className="flex items-center justify-center w-full h-screen p-4  gap-5">
      <Image
        src={fotoSaya}
        alt="image"
        loading="lazy"
        className="w-[40rem] h-[40rem] object-cover rounded-2xl sm:rounded-4xl zoom-in-100 hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="flex flex-row md:flex-col max-w-2xl">
        <div>[3] Experience</div>
        <div
          className={`${clashDisplay.className} text-3xl sm:text-4xl md:text-5xl lg:text-[63px] max-w-5xl font-bold my-3`}
        >
          My Experience
        </div>
        <div className="relative border-l-2 border-muted-foreground/30 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative">
              {/* Bulatan di garis */}
              <span className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-primary border-2 border-background"></span>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.company} • {exp.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
