"use client";
import LinkNext from "next/link";
import { ReactNode } from "react";
interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}
const PrimaryButton = ({
  href,
  onClick,
  children,
  className = "",
  variant = "solid",
}: PrimaryButtonProps) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-12 py-5 text-xl font-black transition-all active:scale-95";
  const variantStyles = {
    solid:
      "bg-white text-slate-950 hover:bg-blue-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    outline:
      "border-2 border-white/20 bg-transparent text-white hover:border-white hover:bg-white/10",
  };
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (href) {
    return (
      <LinkNext href={href} className={combinedStyles}>
        {children}
      </LinkNext>
    );
  }
  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
export default PrimaryButton;
