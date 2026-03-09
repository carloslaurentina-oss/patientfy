interface EyebrowProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export default function Eyebrow({ children, variant = "dark", className = "" }: EyebrowProps) {
  return (
    <div className={`${variant === "light" ? "eyebrow-light" : "eyebrow"} ${className}`}>
      <p>{children}</p>
    </div>
  );
}
