"use client";
import { useState, useEffect } from "react";
import Container from "../molecules/container";
import Button from "../atoms/Button";
import Link from "next/link";
import SeePangasinanIcon from "../atoms/SeePagasinanIcon";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(true), 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-[#124D9B]/90 py-2 shadow-2xl backdrop-blur-md"
          : "bg-[#124D9B] py-4"
      }`}
    >
      <Container className="flex items-center justify-between transition-all duration-500">
        <div className="flex items-center gap-12">
          <SeePangasinanIcon
            className={`transition-all duration-500 hover:scale-105 ${
              isScrolled ? "h-12 lg:h-14" : "h-16 lg:h-20"
            }`}
          />

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {[
                { name: "Home", href: "/" },
                { name: "Where to Go?", href: "/#heritage" },
                { name: "Latest News", href: "/blogs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 font-black uppercase tracking-[0.15em] text-white transition-all duration-500 hover:text-blue-300 ${
                      isScrolled ? "text-sm" : "text-lg"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Button
            href="/contact"
            variant="solid"
            className={`!text-base shadow-xl transition-all duration-500 ${
              isScrolled ? "!px-6 !py-2" : "!px-10 !py-4"
            }`}
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
