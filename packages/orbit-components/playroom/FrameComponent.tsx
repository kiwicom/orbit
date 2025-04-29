import * as React from "react";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

import "./index.css";

const FrameComponent = ({ children }) => {
  return (
    <OrbitProvider theme={defaultTheme}>
      <div id="playroom-frame" dir="ltr">
        {children}
      </div>
    </OrbitProvider>
  );
};

export default FrameComponent;
