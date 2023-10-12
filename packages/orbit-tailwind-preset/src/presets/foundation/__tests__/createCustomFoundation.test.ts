import { defaultFoundation } from "@kiwicom/orbit-design-tokens";

import { createCustomFoundation } from "../createCustomFoundation";

describe("createCustomFoundation", () => {
  it("should merge default foundation with custom foundation", () => {
    expect(
      createCustomFoundation(defaultFoundation, {
        palette: {
          blue: {
            dark: "changed",
            darkActive: "changed 2",
          },
        },
        fontSize: {
          small: "14px",
          normal: "16px",
          large: "18px",
          extraLarge: "20px",
        },
      }),
    ).toMatchInlineSnapshot(`
      {
        "borderRadius": {
          "circle": "50%",
          "large": "6px",
          "normal": "3px",
          "small": "2px",
        },
        "breakpoint": {
          "desktop": 992,
          "largeDesktop": 1200,
          "largeMobile": 576,
          "mediumMobile": 414,
          "smallMobile": 320,
          "tablet": 768,
        },
        "fontFamily": {
          "base": "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
        },
        "fontSize": {
          "extraLarge": "20px",
          "large": "18px",
          "normal": "16px",
          "small": "14px",
        },
        "fontWeight": {
          "bold": "700",
          "medium": "500",
          "normal": "400",
        },
        "lineHeight": {
          "extraLarge": "24px",
          "large": "24px",
          "normal": "20px",
          "small": "16px",
        },
        "palette": {
          "blue": {
            "dark": "changed",
            "darkActive": "changed 2",
            "darkHover": "#004F8F",
            "darker": "#004680",
            "light": "#E8F4FD",
            "lightActive": "#C7E4FA",
            "lightHover": "#DEF0FC",
            "normal": "#0172CB",
            "normalActive": "#01508E",
            "normalHover": "#0161AC",
          },
          "bundle": {
            "basic": "#D7331C",
            "medium": "#3B1EB0",
          },
          "cloud": {
            "dark": "#BAC7D5",
            "darkActive": "#94A8BE",
            "darkHover": "#A6B6C8",
            "light": "#F5F7F9",
            "lightActive": "#D6DEE6",
            "lightHover": "#E5EAEF",
            "normal": "#E8EDF1",
            "normalActive": "#CAD4DE",
            "normalHover": "#DCE3E9",
          },
          "green": {
            "dark": "#2D7738",
            "darkActive": "#1F5126",
            "darkHover": "#276831",
            "darker": "#235C2B",
            "light": "#EAF5EA",
            "lightActive": "#CDE4CF",
            "lightHover": "#E1EFE2",
            "normal": "#28A138",
            "normalActive": "#1D7228",
            "normalHover": "#238B31",
          },
          "ink": {
            "dark": "#252A31",
            "darkActive": "#0B0C0F",
            "darkHover": "#181B20",
            "light": "#697D95",
            "lightActive": "#4A617C",
            "lightHover": "#5D738E",
            "normal": "#4F5E71",
            "normalActive": "#324256",
            "normalHover": "#3E4E63",
          },
          "orange": {
            "dark": "#AD5700",
            "darkActive": "#954A00",
            "darkHover": "#A75400",
            "darker": "#803F00",
            "light": "#FEF2E6",
            "lightActive": "#FAE2C6",
            "lightHover": "#FCECDA",
            "normal": "#DF7B00",
            "normalActive": "#B26200",
            "normalHover": "#C96F00",
          },
          "product": {
            "dark": "#007A69",
            "darkActive": "#006657",
            "darkHover": "#007060",
            "darker": "#005C4E",
            "light": "#E1F4F3",
            "lightActive": "#BFE8E2",
            "lightHover": "#D6F0EC",
            "normal": "#00A58E",
            "normalActive": "#008472",
            "normalHover": "#009580",
          },
          "red": {
            "dark": "#970C0C",
            "darkActive": "#6D0909",
            "darkHover": "#890B0B",
            "darker": "#760909",
            "light": "#FAEAEA",
            "lightActive": "#F3CECE",
            "lightHover": "#F8E2E2",
            "normal": "#D21C1C",
            "normalActive": "#9D1515",
            "normalHover": "#B91919",
          },
          "social": {
            "facebook": "#3B5998",
            "facebookActive": "#354F88",
            "facebookHover": "#385490",
          },
          "white": {
            "normal": "#FFFFFF",
            "normalActive": "#E7ECF1",
            "normalHover": "#F1F4F7",
          },
        },
        "size": {
          "extraExtraLarge": "52px",
          "extraLarge": "44px",
          "large": "32px",
          "medium": "24px",
          "small": "16px",
        },
        "space": {
          "XLarge": "32px",
          "XSmall": "8px",
          "XXLarge": "40px",
          "XXSmall": "4px",
          "XXXLarge": "52px",
          "XXXSmall": "2px",
          "large": "24px",
          "medium": "16px",
          "small": "12px",
        },
      }
    `);
  });
});
