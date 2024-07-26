import getComponentLevelTokens from "../getComponentLevelTokens";

describe("orbit-tailwind-preset", () => {
  it("should get component level token", () => {
    expect(getComponentLevelTokens()("heading", "fontSize")).toMatchInlineSnapshot(`
      {
        "heading-display-font-size": "40px",
        "heading-display-subtitle-font-size": "22px",
        "heading-title0font-size": "28px",
        "heading-title1font-size": "24px",
        "heading-title2font-size": "20px",
        "heading-title3font-size": "18px",
        "heading-title4font-size": "16px",
        "heading-title5font-size": "15px",
        "heading-title6font-size": "13px",
      }
    `);

    expect(getComponentLevelTokens()("heading", "lineHeight")).toMatchInlineSnapshot(`
      {
        "heading-display-line-height": "44px",
        "heading-display-subtitle-line-height": "28px",
        "heading-title0line-height": "36px",
        "heading-title1line-height": "32px",
        "heading-title2line-height": "28px",
        "heading-title3line-height": "24px",
        "heading-title4line-height": "22px",
        "heading-title5line-height": "20px",
        "heading-title6line-height": "18px",
      }
    `);

    expect(getComponentLevelTokens()("heading", "fontWeight")).toMatchInlineSnapshot(`
      {
        "heading-display-font-weight": "700",
        "heading-display-subtitle-font-weight": "400",
        "heading-title0font-weight": "700",
        "heading-title1font-weight": "700",
        "heading-title2font-weight": "700",
        "heading-title3font-weight": "700",
        "heading-title4font-weight": "700",
        "heading-title5font-weight": "700",
        "heading-title6font-weight": "700",
      }
    `);

    expect(getComponentLevelTokens()("button", "background")).toMatchInlineSnapshot(`
      {
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

    expect(getComponentLevelTokens()("button", "backgroundHover")).toMatchInlineSnapshot(`
      {
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
