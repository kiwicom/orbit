import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import OrbitProvider from "../../OrbitProvider";

interface Props {
  readonly children: React.ReactNode;
}

const RenderInRtl = ({ children }: Props) => {
  React.useEffect(() => {
    if (document) {
      document.documentElement.setAttribute("dir", "rtl");
    }

    return () => {
      if (document) {
        document.documentElement.removeAttribute("dir");
      }
    };
  }, []);

  return (
    <OrbitProvider theme={{ orbit: defaultTokens, rtl: true }} useId={React.useId}>
      {children}
    </OrbitProvider>
  );
};

export default RenderInRtl;
