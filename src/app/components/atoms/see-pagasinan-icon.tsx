"use client";

import Image from "next/image";
import LinkNext from "next/link";
import tourGif from "../../../../public/images/gif/tour-icon.gif"; // Siguraduhin na tama ang path

interface LogoProps {
  className?: string;
  href?: string; // Optional: baka gusto mong hindi siya clickable sa ibang lugar
}

const SeePangasinanIcon = ({ className = "", href = "/" }: LogoProps) => {
  const logoImage = (
    <Image
      src={tourGif}
      alt="SeePangasinan Logo"
      // Inalis ang h-12 dito para ang className prop ang mag-control ng size
      className={`w-auto object-contain ${className}`}
      unoptimized
      priority
    />
  );

  // Kung may href, i-wrap sa Link. Kung wala, render lang ang image.
  if (href) {
    return (
      <LinkNext
        href={href}
        className="inline-block transition-opacity hover:opacity-90"
      >
        {logoImage}
      </LinkNext>
    );
  }

  return logoImage;
};

export default SeePangasinanIcon;
