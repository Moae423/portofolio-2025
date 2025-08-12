"use client";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const dataNavbar = [
  { title: "Home", link: "#homepage" },
  { title: "Projects", link: "#project" },
  { title: "Experience", link: "#stories" },
];

const Navbar = () => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.inOut" }
      );
    }
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!navRef.current) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scroll ke bawah -> hide navbar
        gsap.to(navRef.current, {
          y: -120,
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        // Scroll ke atas -> show navbar
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      ref={navRef}
      className="fixed z-10 top-0 md:top-8 left-0 right-0 max-w-7xl rounded-none md:rounded-full mx-auto flex items-center justify-between py-4 px-8 text-white overflow-hidden shadow-lg"
    >
      {/* Layer background blur */}
      <div className="absolute inset-0 bg-[#000000]/70 backdrop-blur-2xl z-0 pointer-events-none"></div>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-5 relative z-10">
        {dataNavbar.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>

      {/* Logo */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold z-10">
        Daffa Rihadatul Fairus
      </h1>

      {/* Button */}
      <Button
        variant="default"
        className="hover:bg-white/90 text-white cursor-pointer relative z-10 hover:text-black hover:scale-105 active:scale-100 transition-all ease-in-out duration-300"
      >
        <Mail className="w-4 h-4" />
        Contact
      </Button>
    </nav>
  );
};

export default Navbar;
