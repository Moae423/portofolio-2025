"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import gsap from "gsap";
import { Mail, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const dataNavbar = [
  { title: "Home", link: "#homepage" },
  { title: "Projects", link: "#project" },
  { title: "Experience", link: "#stories" },
];

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Animasi navbar on mount + scroll hide/show
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
        gsap.to(navRef.current, {
          y: -120,
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed z-20 top-0 md:top-8 left-0 right-0 max-w-7xl rounded-none md:rounded-full mx-auto flex items-center justify-between py-4 px-6 text-white overflow-hidden shadow-lg"
    >
      {/* Background blur */}
      <div className="absolute inset-0 bg-[#000000]/70 backdrop-blur-2xl z-0 pointer-events-none"></div>

      {/* Left: Menu desktop */}
      <ul className="hidden md:flex items-center gap-5 relative z-10">
        {dataNavbar.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>

      {/* Center: Logo */}
      <h1 className="text-xl md:text-2xl font-semibold relative z-10">
        Daffa Rihadatul Fairus
      </h1>

      {/* Right: Mobile dropdown + Contact desktop */}
      <div className="relative z-10 flex items-center">
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Menu size={28} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-black/90 text-white backdrop-blur-lg border-gray-700">
              {dataNavbar.map((item, index) => (
                <DropdownMenuItem key={index} className="focus:bg-gray-800">
                  <Link href={item.link} className="w-full">
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem className="focus:bg-gray-800">
                <Button
                  variant="default"
                  className="w-full hover:bg-white/90 text-white hover:text-black"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Contact Desktop */}
        <div className="hidden md:block">
          <Link
            target="_blank"
            href={
              "https://wa.me/6283188003716?text=Hai%20Daffa!%20Saya%20tertarik%20dengan%20portofolio%20kamu.%20Bolehkah%20kita%20berdiskusi%3F"
            }
          >
            <Button
              variant="default"
              className="hover:bg-white/90 text-white cursor-pointer hover:text-black hover:scale-105 active:scale-100 transition-all ease-in-out duration-300"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
