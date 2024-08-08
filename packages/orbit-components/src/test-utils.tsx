import * as React from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import fs from "fs";
import path from "path";

import theme from "./defaultTheme";
import OrbitProvider from "./OrbitProvider";

const wrapper: React.ComponentType = ({ children }: React.PropsWithChildren) => (
  <OrbitProvider useId={React.useId} theme={theme}>
    {children}
  </OrbitProvider>
);

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync(path.resolve(__dirname, "../lib/tailwind.css"), "utf8");
  document.head.appendChild(style);

  return view;
};

export const spaceAfterTokens = {
  none: "0",
  smallest: theme.orbit.space100,
  small: theme.orbit.space200,
  normal: theme.orbit.space300,
  medium: theme.orbit.space400,
  large: theme.orbit.space600,
  largest: theme.orbit.space800,
};

export * from "@testing-library/react";
export { customRender as render };
