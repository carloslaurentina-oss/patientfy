interface EyebrowProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export default function Eyebrow({ children, variant = "dark", className = "" }: EyebrowProps) {
  return (
    <div className={`${variant === "light" ? "eyebrow-light" : "eyebrow"} ${className}`}>
      <span className={`inline-block w-5 h-px ${variant === "light" ? "bg-white/40" : "bg-neutral-400"}`} />
      <p>{children}</p>
    </div>
  );
}
