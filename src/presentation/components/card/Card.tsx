import { Text } from "@/presentation/layouts";
import { cn } from "@/presentation/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React, { HTMLAttributes, ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

import {
  Card as _Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";

const card = cva("w-full rounded-[8px] space-y-2 p-[8px] ", {
  variants: {
    type: {
      default: "",
      imageOnTop: "",
      imageOnSide: "flex",
    },
    imageOnLeft: {
      true: "",
      false: "",
    },
  },

  defaultVariants: {
    type: "default",
  },

  compoundVariants: [
    {
      type: "imageOnTop",
      class: "flex flex-col-reverse justify-between",
    },

    {
      type: "imageOnSide",
      imageOnLeft: true,
      class: "flex ",
    },

    {
      type: "imageOnSide",
      imageOnLeft: false,
      class: "flex flex-row-reverse",
    },
  ],
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  title?: string;
  description?: string;
  imageUri?: string;
  button?: ReactNode;
  textContent?: ReactNode;
}

function Card({
  imageUri,
  description,
  button,
  title,
  className,
  type,
  textContent,
  imageOnLeft,
  ...props
}: CardProps) {
  const textWrapStyle = type == "default" ? "" : "";
  return (
    <_Card className={`w-full ${className}`}>
      <div className={cn(card({ type, imageOnLeft }))} {...props}>
        <CardHeader className="flex-1  flex flex-col ">
          {textContent ? (
            <div className=" h-full space-y-2 flex flex-col justify-center ">
              {textContent}
            </div>
          ) : (
            <div className="">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          )}
        </CardHeader>
        <CardContent className=" ">
          <div className="mb-4 ">
            {imageUri && (
              <div className="aspect-video w-full">
                <Image
                  src={imageUri}
                  height={500}
                  width={500}
                  alt="Descrição"
                  className="w-full h-full object-cover "
                />
              </div>
            )}
          </div>
        </CardContent>
      </div>
      {button && <CardFooter className="flex-col gap-2">{button}</CardFooter>}
    </_Card>
  );
}

export default Card;
