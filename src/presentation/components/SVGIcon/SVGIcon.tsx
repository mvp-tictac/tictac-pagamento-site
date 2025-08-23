import { SVGIconKeyT, SVGIcons } from "@/assets/svg";
import React from "react";

// Importa todos os SVGs de uma pasta como componentes React

type IconProps = {
  name: SVGIconKeyT;
  size?: number;
  color?: string;
  className?: string;
};

export default function SVGIcon({
  name,
  size = 24,
  color = "currentColor",
  className,
}: IconProps) {
  const SvgIconComp = SVGIcons[name] ?? SVGIcons["default"];
  return (
    <SvgIconComp
      width={size}
      height={size}
      fill={color}
      className={className}
    />
  );
}
