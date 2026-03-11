import Link from "next/link";
import { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm rounded-lg transition-all duration-300",
  variants: {
    variant: {
      primary: "bg-neutral-1000 text-white hover:bg-neutral-800 hover:gap-3",
      "secondary-dark":
        "border border-neutral-300 text-neutral-1000 hover:border-neutral-1000 hover:gap-3",
      "secondary-light":
        "border border-white/30 text-white hover:border-white hover:gap-3",
      white:
        "bg-white text-neutral-1000 hover:bg-neutral-200 hover:gap-3",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  external = false,
}: ButtonProps) {
  const cls = buttonVariants({ variant, class: className });

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
