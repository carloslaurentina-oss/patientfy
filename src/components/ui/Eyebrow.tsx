import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const eyebrowVariants = tv({
  slots: {
    root: "self-start inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
    dot: "size-1.5 rounded-full shrink-0",
  },
  variants: {
    variant: {
      dark: {
        root: "border-neutral-200 bg-neutral-100 text-neutral-700",
        dot: "bg-primary-500",
      },
      light: {
        root: "border-white/20 bg-white/10 text-white/80",
        dot: "bg-primary-400",
      },
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

export interface EyebrowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof eyebrowVariants> {}

const Eyebrow = React.forwardRef<HTMLDivElement, EyebrowProps>(
  ({ className, variant, children, ...props }, ref) => {
    const { root, dot } = eyebrowVariants({ variant });
    return (
      <div ref={ref} className={root({ class: className })} {...props}>
        <span className={dot()} aria-hidden="true" />
        <p>{children}</p>
      </div>
    );
  }
);
Eyebrow.displayName = "Eyebrow";

export { Eyebrow, eyebrowVariants };
export default Eyebrow;
