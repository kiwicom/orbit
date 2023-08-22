import * as React from "react";
import { OrbitProvider, defaultTheme as theme } from "@kiwicom/orbit-components";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";

const wrapper: React.ComponentType = ({ children }: React.PropsWithChildren) => (
  <OrbitProvider useId={React.useId} theme={theme}>
    {children}
  </OrbitProvider>
);

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  return render(ui, { wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
