import { Link } from "react-router";

interface LogoProps {
  size?: "small" | "large";
}

export function Logo({ size = "large" }: LogoProps) {
  const textSize = size === "large" ? "text-6xl" : "text-2xl";
  
  return (
    <Link to="/" className={`${textSize} font-bold text-gray-800 tracking-tighter select-none`}>
      Boogle
    </Link>
  );
}
