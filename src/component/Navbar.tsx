import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
 
const dataNavbar = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/" },
  { title: "Stories", link: "/" },
  { title: "Contact", link: "/" },
];

const Navbar = () => {
  return (
    <nav className="absolute z-10 top-0 md:top-4 left-0 right-0 max-w-7xl rounded-none md:rounded-full mx-auto flex items-center justify-between py-4 px-8 text-white overflow-hidden shadow-lg">
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
        Tarnished
      </h1>

      {/* Button */}
      <Button
        variant="default"
        className="text-white cursor-pointer relative z-10"
      >
        Look For More
      </Button>
    </nav>
  );
};

export default Navbar;
