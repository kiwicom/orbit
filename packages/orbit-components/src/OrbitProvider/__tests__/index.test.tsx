import React from "react";
import { render } from "@testing-library/react";
import { getTokens } from "@kiwicom/orbit-design-tokens";

import OrbitProvider from "..";

const orbitTheme = {
  palette: {
    product: {
      light: "#ff9999",
      lightHover: "#ff7f7f",
      lightActive: "#ff6666",
      normal: "#ff0000",
      normalHover: "#e50000",
      normalActive: "#cc0000",
      dark: "#990000",
      darkHover: "#720000",
      darkActive: "#630000",
      darker: "#530000",
    },
  },
};

describe("OrbitProvider", () => {
  const ID = "orbit-theme-css-vars";
  it("should add css variables to the head", () => {
    render(
      <OrbitProvider theme={{ orbit: { ...getTokens(orbitTheme) } }} useId={React.useId}>
        kek
      </OrbitProvider>,
    );

    expect(document.getElementById(ID)).toBeInTheDocument();
    expect(document.getElementById(ID)?.innerText).toMatchInlineSnapshot(`undefined`);
  });
});
