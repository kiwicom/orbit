import { defaultFoundation } from "@kiwicom/orbit-design-tokens";

import { transformToKebabCase, getComponentLevelToken } from "../presets/foundation/helpers";

describe("orbit-tailwind-preset", () => {
  it("should transform foundation to kebab case", () => {
    expect(transformToKebabCase(defaultFoundation)).toMatchInlineSnapshot(`
      Object {
        "border-radius": Object {
          "circle": "50%",
          "large": "6px",
          "normal": "3px",
          "small": "2px",
        },
        "breakpoint": Object {
          "desktop": 992,
          "large-desktop": 1200,
          "large-mobile": 576,
          "medium-mobile": 414,
          "small-mobile": 320,
          "tablet": 768,
        },
        "font-family": Object {
          "base": "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
        },
        "font-size": Object {
          "extra-large": "18px",
          "large": "16px",
          "normal": "15px",
          "small": "13px",
        },
        "font-weight": Object {
          "bold": "700",
          "medium": "500",
          "normal": "400",
        },
        "line-height": Object {
          "large": "24px",
          "normal": "20px",
          "small": "16px",
        },
        "palette": Object {
          "blue": Object {
            "dark": "#005AA3",
            "dark-active": "#003E70",
            "dark-hover": "#004F8F",
            "darker": "#004680",
            "light": "#E8F4FD",
            "light-active": "#C7E4FA",
            "light-hover": "#DEF0FC",
            "normal": "#0172CB",
            "normal-active": "#01508E",
            "normal-hover": "#0161AC",
          },
          "cloud": Object {
            "dark": "#BAC7D5",
            "dark-active": "#94A8BE",
            "dark-hover": "#A6B6C8",
            "light": "#F5F7F9",
            "light-active": "#D6DEE6",
            "light-hover": "#E5EAEF",
            "normal": "#E8EDF1",
            "normal-active": "#CAD4DE",
            "normal-hover": "#DCE3E9",
          },
          "green": Object {
            "dark": "#2D7738",
            "dark-active": "#1F5126",
            "dark-hover": "#276831",
            "darker": "#235C2B",
            "light": "#EAF5EA",
            "light-active": "#CDE4CF",
            "light-hover": "#E1EFE2",
            "normal": "#28A138",
            "normal-active": "#1D7228",
            "normal-hover": "#238B31",
          },
          "ink": Object {
            "dark": "#252A31",
            "dark-active": "#0B0C0F",
            "dark-hover": "#181B20",
            "light": "#697D95",
            "light-active": "#4A617C",
            "light-hover": "#5D738E",
            "normal": "#4F5E71",
            "normal-active": "#324256",
            "normal-hover": "#3E4E63",
          },
          "orange": Object {
            "dark": "#AD5700",
            "dark-active": "#954A00",
            "dark-hover": "#A75400",
            "darker": "#803F00",
            "light": "#FEF2E6",
            "light-active": "#FAE2C6",
            "light-hover": "#FCECDA",
            "normal": "#DF7B00",
            "normal-active": "#B26200",
            "normal-hover": "#C96F00",
          },
          "product": Object {
            "dark": "#007A69",
            "dark-active": "#006657",
            "dark-hover": "#007060",
            "darker": "#005C4E",
            "light": "#E1F4F3",
            "light-active": "#BFE8E2",
            "light-hover": "#D6F0EC",
            "normal": "#00A58E",
            "normal-active": "#008472",
            "normal-hover": "#009580",
          },
          "red": Object {
            "dark": "#970C0C",
            "dark-active": "#6D0909",
            "dark-hover": "#890B0B",
            "darker": "#760909",
            "light": "#FAEAEA",
            "light-active": "#F3CECE",
            "light-hover": "#F8E2E2",
            "normal": "#D21C1C",
            "normal-active": "#9D1515",
            "normal-hover": "#B91919",
          },
          "social": Object {
            "facebook": "#3B5998",
            "facebook-active": "#354F88",
            "facebook-hover": "#385490",
          },
          "white": Object {
            "normal": "#FFFFFF",
            "normal-active": "#E7ECF1",
            "normal-hover": "#F1F4F7",
          },
        },
        "size": Object {
          "extra-extra-large": "52px",
          "extra-large": "44px",
          "large": "32px",
          "medium": "24px",
          "small": "16px",
        },
        "space": Object {
          "large": "24px",
          "medium": "16px",
          "small": "12px",
          "xlarge": "32px",
          "xsmall": "8px",
          "xxlarge": "40px",
          "xxsmall": "4px",
          "xxxlarge": "52px",
          "xxxsmall": "2px",
        },
      }
    `);
  });

  it("should get component level token", () => {
    expect(getComponentLevelToken("heading", "fontSize")).toMatchInlineSnapshot(`
      Object {
        "heading-display-font-size": "40px",
        "heading-display-subtitle-font-size": "22px",
        "heading-title1font-size": "28px",
        "heading-title2font-size": "22px",
        "heading-title3font-size": "16px",
        "heading-title4font-size": "15px",
        "heading-title5font-size": "13px",
        "heading-title6font-size": "13px",
      }
    `);

    expect(getComponentLevelToken("heading", "lineHeight")).toMatchInlineSnapshot(`
      Object {
        "heading-display-line-height": "44px",
        "heading-display-subtitle-line-height": "28px",
        "heading-title1line-height": "36px",
        "heading-title2line-height": "28px",
        "heading-title3line-height": "24px",
        "heading-title4line-height": "20px",
        "heading-title5line-height": "20px",
        "heading-title6line-height": "20px",
      }
    `);

    expect(getComponentLevelToken("heading", "fontWeight")).toMatchInlineSnapshot(`
      Object {
        "heading-display-font-weight": "700",
        "heading-display-subtitle-font-weight": "400",
        "heading-title1font-weight": "700",
        "heading-title2font-weight": "500",
        "heading-title3font-weight": "500",
        "heading-title4font-weight": "500",
        "heading-title5font-weight": "700",
        "heading-title6font-weight": "700",
      }
    `);

    expect(getComponentLevelToken("button", "background")).toMatchInlineSnapshot(`
      Object {
        "button-bundle-basic-background": "linear-gradient(to top right, #E13E3B 0%, #E87E09 100%)",
        "button-bundle-medium-background": "linear-gradient(to top right, #3719AB 0%, #8539DB 100%)",
        "button-bundle-top-background": "linear-gradient(to top right, #2D2D2E 0%, #696E73 100%)",
        "button-critical-background": "#D21C1C",
        "button-critical-subtle-background": "#FAEAEA",
        "button-info-background": "#0172CB",
        "button-link-critical-background": "transparent",
        "button-link-primary-background": "transparent",
        "button-link-secondary-background": "transparent",
        "button-primary-background": "#00A58E",
        "button-primary-subtle-background": "#E1F4F3",
        "button-secondary-background": "#E8EDF1",
        "button-success-background": "#28A138",
        "button-warning-background": "#DF7B00",
        "button-white-background": "#FFFFFF",
      }
    `);

    expect(getComponentLevelToken("button", "backgroundHover")).toMatchInlineSnapshot(`
      Object {
        "button-bundle-basic-background-hover": "linear-gradient(to top right, #BD2825 0%, #D67000 100%)",
        "button-bundle-medium-background-hover": "linear-gradient(to top right, #BD2825 0%, #D67000 100%)",
        "button-bundle-top-background-hover": "linear-gradient(to top right, #171718 0%, #51575C 100%)",
        "button-critical-background-hover": "#B91919",
        "button-critical-subtle-background-hover": "#F8E2E2",
        "button-info-background-hover": "#0161AC",
        "button-link-critical-background-hover": "#F8E2E2",
        "button-link-primary-background-hover": "#D6F0EC",
        "button-link-secondary-background-hover": "#E5EAEF",
        "button-primary-background-hover": "#009580",
        "button-primary-subtle-background-hover": "#D6F0EC",
        "button-secondary-background-hover": "#DCE3E9",
        "button-success-background-hover": "#238B31",
        "button-warning-background-hover": "#C96F00",
        "button-white-background-hover": "#F5F7F9",
      }
    `);
  });
});
