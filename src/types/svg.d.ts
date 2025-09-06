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
