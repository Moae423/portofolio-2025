import React from "react";
import Link from "next/link";
import { clashDisplay } from "@/assets/fonts/font";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted-foreground/20 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className={`${clashDisplay.className} text-3xl font-bold mb-3`}>
            Daffa Rihadatul Fairus
          </h2>
          <p className="text-muted-foreground text-sm">
            Building modern web experiences and Network with passion and
            precision.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3
            className={`${clashDisplay.className} text-xl font-semibold mb-3`}
          >
            Navigation
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-foreground transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3
            className={`${clashDisplay.className} text-xl font-semibold mb-3`}
          >
            Follow Me
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href="https://www.instagram.com/fairus_daffa/"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/daffa-rihadatul-fairus/"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Moae423"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-muted-foreground/20 mt-8 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Daffa Rihadatul Fairus. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
