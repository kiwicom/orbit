import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import fs from "fs";
import path from "path";

const renderWrapper = (ui: React.ReactElement<any>, options?: RenderOptions) => {
  const view = render(ui, { ...options });
  const style = document.createElement("style");
  style.innerHTML = fs.readFileSync(path.join(__dirname, "../style.css"), "utf8");
  document.head.appendChild(style);

  return view;
};

export * from "@testing-library/react";
export { renderWrapper as render };
