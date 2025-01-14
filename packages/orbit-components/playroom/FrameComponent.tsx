import * as React from "react";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

import "./index.css";

const FrameComponent = ({ children }) => {
  return (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <div id="playroom-frame">{children}</div>
    </OrbitProvider>
  );
};

export default FrameComponent;
