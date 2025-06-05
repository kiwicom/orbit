import React from "react";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

// Default implementation, that you can customize
export default function Root({ children }: { children: React.ReactNode }) {
  return <OrbitProvider theme={defaultTheme}>{children}</OrbitProvider>;
}
