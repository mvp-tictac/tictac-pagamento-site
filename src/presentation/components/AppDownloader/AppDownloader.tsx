"use client";
import { Text } from "@/presentation/layouts";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
// import PlayStoreIcon from "../../../assets/svg/teste.svg";
import PlayStore from "../../../assets/svg/playstore.svg";
import SVGIcon from "../SVGIcon/SVGIcon";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/presentation/lib/utils";
import { SVGIconKeyT } from "@/assets/svg";

const AppDownloaderVariants = cva(
  "flex items-center gap-x-2 justify-around px-2 rounded-[5px]  m-10",
  {
    variants: {
      // Preenchimento
      variant: {
        filledPrimary: "bg-primary ",
        filledSecondary: "bg-secondary ",
        outlinedPrimary: "bg-transparent border-2 border-primary =",
        outlinedSecondary: "bg-transparent border-2 border-secondary ",
      },

      text: {
        primary: "",
        secondary: "",
        neutral: "",
      },
      size: {
        sm: "w-[150px] h-[50px]",
        md: "w-[180px] h-[60px]",
        lg: "w-[190px] h-[70px]",
      },
    },
    defaultVariants: {
      variant: "filledPrimary",
      text: "secondary",
      size: "md",
    },
  }
);

export interface AppDownloaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AppDownloaderVariants> {
  osStoreIcon?: SVGIconKeyT;
  iconColor?: string;
  iconSize?: number;
}

function AppDownloader({
  className,
  size,
  text,
  variant,
  osStoreIcon = "playStore",
  iconColor = "currentColor",
  iconSize = 40,
  ...props
}: AppDownloaderProps) {
  return (
    <div
      className={cn(AppDownloaderVariants({ className, size, text, variant }))}
      {...props}
    >
      <SVGIcon color={iconColor} size={40} name={osStoreIcon} />
      <div>
        <Text color={"offwhite"}>Disponível</Text>
        <Text size={"headlineSmall"} color={"offwhite"}>
          Goole Play
        </Text>
      </div>
    </div>
  );
}

export default AppDownloader;
