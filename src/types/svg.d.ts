// declare module "*.svg" {
//   import { FC, SVGProps } from "react";
//   const content: FC<SVGProps<SVGElement>>;
//   export default content;
// }

// declare module "*.svg?url" {
//   const content: any;
//   export default content;
// }

declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

// Para SVG como URL (quando usado com next/image)
declare module "*.svg?url" {
  const content: string;
  export default content;
}
