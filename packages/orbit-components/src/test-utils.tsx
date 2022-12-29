import * as React from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import fs from "fs";
import path from "path";

import theme from "./defaultTheme";

const wrapper: React.ComponentType = ({ children }: React.PropsWithChildren) => <>{children}</>;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync(path.resolve(__dirname, "../lib/tailwind.css"), "utf8");
  document.head.appendChild(style);

  return view;
};

export const spaceAfterTokens = {
  none: "0",
  smallest: theme.orbit.spaceXXSmall,
  small: theme.orbit.spaceXSmall,
  normal: theme.orbit.spaceSmall,
  medium: theme.orbit.spaceMedium,
  large: theme.orbit.spaceLarge,
  largest: theme.orbit.spaceXLarge,
};

export * from "@testing-library/react";
export { customRender as render };
