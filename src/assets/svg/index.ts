import { FunctionComponent, SVGProps } from "react";
import playStore from "./files/playstore.svg";
import appStore from "./files/appstore.svg";
import imagePlaceholder from "./files/image-placeholder.svg";

type SVGIconType = FunctionComponent<SVGProps<SVGSVGElement>>;
const SVGIcons = {
  default: imagePlaceholder as SVGIconType,
  playStore: playStore as SVGIconType,
  appStore: appStore as SVGIconType,
};

export type SVGIconKeyT = keyof typeof SVGIcons;
export { SVGIcons };
