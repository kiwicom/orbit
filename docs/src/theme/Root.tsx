import React from "react";
import { OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default function Root({ children }: { children: React.ReactNode }) {
  return <OrbitProvider theme={defaultTheme}>{children}</OrbitProvider>;
}
