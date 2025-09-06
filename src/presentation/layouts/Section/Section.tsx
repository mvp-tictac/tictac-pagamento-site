import { cn } from "@/presentation/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";

const section = cva("w-full h-padding py-8", {
  variants: {
    bgVariant: {
      primary: "bg-cyan-400",
      secondary: "bg-red-400",
      default: "",
    },
  },
  defaultVariants: {
    bgVariant: "default",
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof section> {
  children: ReactNode;
}

function Section({
  children,
  bgVariant = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <div className={cn(section({ bgVariant }), className)} {...props}>
      {children}
    </div>
  );
}

export default Section;
