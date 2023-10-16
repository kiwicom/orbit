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
    expect(document.getElementById(ID)?.innerText).toMatchInlineSnapshot(
      `":root {--palette-blue-light:#E8F4FD;--palette-blue-light-hover:#DEF0FC;--palette-blue-light-active:#C7E4FA;--palette-blue-normal:#0172CB;--palette-blue-normal-hover:#0161AC;--palette-blue-normal-active:#01508E;--palette-blue-dark:#005AA3;--palette-blue-dark-hover:#004F8F;--palette-blue-dark-active:#003E70;--palette-blue-darker:#004680;--palette-bundle-basic:#D7331C;--palette-bundle-medium:#3B1EB0;--palette-cloud-light:#F5F7F9;--palette-cloud-light-hover:#E5EAEF;--palette-cloud-light-active:#D6DEE6;--palette-cloud-normal:#E8EDF1;--palette-cloud-normal-hover:#DCE3E9;--palette-cloud-normal-active:#CAD4DE;--palette-cloud-dark:#BAC7D5;--palette-cloud-dark-hover:#A6B6C8;--palette-cloud-dark-active:#94A8BE;--palette-green-light:#EAF5EA;--palette-green-light-hover:#E1EFE2;--palette-green-light-active:#CDE4CF;--palette-green-normal:#28A138;--palette-green-normal-hover:#238B31;--palette-green-normal-active:#1D7228;--palette-green-dark:#2D7738;--palette-green-dark-hover:#276831;--palette-green-dark-active:#1F5126;--palette-green-darker:#235C2B;--palette-ink-dark:#252A31;--palette-ink-dark-hover:#181B20;--palette-ink-dark-active:#0B0C0F;--palette-ink-light:#697D95;--palette-ink-light-hover:#5D738E;--palette-ink-light-active:#4A617C;--palette-ink-normal:#4F5E71;--palette-ink-normal-hover:#3E4E63;--palette-ink-normal-active:#324256;--palette-orange-light:#FEF2E6;--palette-orange-light-hover:#FCECDA;--palette-orange-light-active:#FAE2C6;--palette-orange-normal:#DF7B00;--palette-orange-normal-hover:#C96F00;--palette-orange-normal-active:#B26200;--palette-orange-dark:#AD5700;--palette-orange-dark-hover:#A75400;--palette-orange-dark-active:#954A00;--palette-orange-darker:#803F00;--palette-product-light:#ff9999;--palette-product-light-hover:#ff7f7f;--palette-product-light-active:#ff6666;--palette-product-normal:#ff0000;--palette-product-normal-hover:#e50000;--palette-product-normal-active:#cc0000;--palette-product-dark:#990000;--palette-product-dark-hover:#720000;--palette-product-dark-active:#630000;--palette-product-darker:#530000;--palette-red-light:#FAEAEA;--palette-red-light-hover:#F8E2E2;--palette-red-light-active:#F3CECE;--palette-red-normal:#D21C1C;--palette-red-normal-hover:#B91919;--palette-red-normal-active:#9D1515;--palette-red-dark:#970C0C;--palette-red-dark-hover:#890B0B;--palette-red-dark-active:#6D0909;--palette-red-darker:#760909;--palette-social-facebook:#3B5998;--palette-social-facebook-hover:#385490;--palette-social-facebook-active:#354F88;--palette-white:#FFFFFF;--palette-white-normal:#FFFFFF;--palette-white-hover:#F1F4F7;--palette-white-active:#E7ECF1;}"`,
    );
  });
});
