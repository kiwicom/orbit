import * as React from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import fs from "fs";
import path from "path";

const wrapper: React.ComponentType = ({ children }) => <>{children}</>;

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync(path.resolve(__dirname, "../lib/tailwind.css"), "utf8");
  document.head.appendChild(style);

  return view;
};

export * from "@testing-library/react";
export { customRender as render };
