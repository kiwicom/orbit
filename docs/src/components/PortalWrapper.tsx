import React from "react";
import { Portal } from "@kiwicom/orbit-components";

// This wrapper fixes TS2786 error for Portal usage in JSX
const PortalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  // @ts-expect-error
  <Portal>{children}</Portal>
);

export default PortalWrapper;
