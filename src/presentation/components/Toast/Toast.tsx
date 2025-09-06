"use client";
import React, { HTMLAttributes, ReactNode } from "react";
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  OctagonAlertIcon,
  PopcornIcon,
} from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/presentation/components/ui/alert";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/presentation/lib/utils";
import { toast } from "sonner";

const IconSwitcher = {
  success: CheckCircle2Icon,
  destructive: OctagonAlertIcon,
  default: InfoIcon,
};

export const ToastVariants = cva("grid w-full items-start ", {
  variants: {
    variant: {
      success: "text-success",
      destructive: "text-destructive",
      default: "text-neutral",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ToastProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ToastVariants> {
  title: string;
  contentToShow: string | ReactNode;
  id: string;
}

function Toast({
  contentToShow,
  title,
  variant,
  className,
  id,
  ...props
}: ToastProps) {
  const Icon = IconSwitcher[variant ?? "default"];

  toast(
    <div className={cn(ToastVariants({ variant }), className)} {...props}>
      <Alert className=" border-none" variant={variant}>
        <Icon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{contentToShow}</AlertDescription>
      </Alert>
    </div>,

    {
      className: "flex flex-col",
      closeButton: true,
      duration: 2000,
    }
  );
}

export default Toast;
