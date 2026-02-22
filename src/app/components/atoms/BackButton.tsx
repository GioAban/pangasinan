// components/atoms/BackButton.tsx
import Link from "next/link";

interface BackButtonProps {
  href?: string;
  label?: string;
  variant?: "white" | "dark" | "blue"; // Dagdag na variants
}

const BackButton = ({
  href = "/",
  label = "Back to Home",
  variant = "white",
}: BackButtonProps) => {
  // Logic para sa kulay base sa variant
  const variantStyles = {
    white: "text-white hover:text-blue-300",
    dark: "text-slate-900 hover:text-blue-600",
    blue: "text-blue-600 hover:text-blue-800",
  };

  return (
    <Link
      href={href}
      className={`group mb-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] transition-colors ${variantStyles[variant]}`}
    >
      <span className="transition-transform group-hover:-translate-x-1">←</span>
      {label}
    </Link>
  );
};

export default BackButton;
