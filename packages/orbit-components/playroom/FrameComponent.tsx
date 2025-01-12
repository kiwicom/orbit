import * as React from "react";
import "./index.css";

import { OrbitProvider } from "../src";
import defaultTheme from "../src/defaultTheme";

// Wrap all examples in OrbitProvider for proper theming
const FrameComponent = ({ children }) => {
  return (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <div style={{ padding: "20px" }}>{children}</div>
    </OrbitProvider>
  );
};
export default FrameComponent;
