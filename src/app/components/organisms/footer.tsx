"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { FooterNav } from "../molecules/footer-nav";
import { FooterIcon } from "../atoms/footer-icon";
import SeePangasinanIcon from "../atoms/see-pagasinan-icon";
import ProvincialLogoIcon from "../atoms/provincial-logo-icon";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#1e73be] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex items-center gap-6">
            <div className="relative h-20 w-48">
              <SeePangasinanIcon className="h-16 w-16" />
            </div>
            <div className="hidden h-16 w-[1px] bg-white/20 lg:block" />
            <div className="relative h-16 w-16">
              <ProvincialLogoIcon className="h-16 w-16" />
            </div>
          </div>
          <FooterNav />
          <div className="flex gap-4">
            <FooterIcon href="https://facebook.com">
              <Facebook size={20} />
            </FooterIcon>
            <FooterIcon href="https://instagram.com">
              <Instagram size={20} />
            </FooterIcon>
            <FooterIcon href="https://youtube.com">
              <Youtube size={20} />
            </FooterIcon>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/70">
          <p>
            © {currentYear} Pangasinan Provincial Tourism and Cultural Affairs
            Office (PTCAO). All Rights Reserved.
          </p>
          <p className="mt-2 uppercase tracking-widest opacity-50">
            Branding and Website by MITS02a Heritage Team
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
