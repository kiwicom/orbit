import { defaultTokens } from "@kiwicom/orbit-design-tokens";

describe("Heading media query", () => {
  it("should have correct styles for small mobile", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointMediumMobile - 10, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.fontSizeHeadingTitle1);
    element.should("have.css", "line-height", defaultTokens.lineHeightHeadingTitle1);
    element.should("have.css", "font-weight", defaultTokens.fontWeightHeadingTitle1);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.fontSizeHeadingDisplay);
  });
  it("should have correct styles for medium mobile", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointMediumMobile, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.fontSizeHeadingDisplay);
    element.should("have.css", "line-height", defaultTokens.lineHeightHeadingDisplay);
    element.should("have.css", "font-weight", defaultTokens.fontWeightHeadingDisplay);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.fontSizeHeadingTitle2);
    element.should("not.have.css", "margin-bottom", defaultTokens.spaceSmall);
  });

  it("should have correct styles for large mobile", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointLargeMobile, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.fontSizeHeadingTitle2);
    element.should("have.css", "line-height", defaultTokens.lineHeightHeadingTitle2);
    element.should("have.css", "font-weight", defaultTokens.fontWeightHeadingTitle2);
    element.should("have.css", "margin", `0px 0px ${defaultTokens.spaceXSmall}`);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.fontSizeHeadingTitle4);
    element.should("not.have.css", "text-align", "center");
  });

  it("should have correct styles for tablet", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointTablet, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.fontSizeHeadingTitle4);
    element.should("have.css", "line-height", defaultTokens.lineHeightHeadingTitle4);
    element.should("have.css", "font-weight", defaultTokens.fontWeightHeadingTitle4);
    element.should("have.css", "text-align", "center");

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.fontSizeHeadingTitle5);
  });

  it("should have correct styles for desktop", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointDesktop, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.fontSizeHeadingTitle5);
    element.should("have.css", "line-height", defaultTokens.lineHeightHeadingTitle5);
    element.should("have.css", "font-weight", defaultTokens.fontWeightHeadingTitle5);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.fontSizeHeadingTitle6);
  });

  it("should have correct styles for large desktop", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointLargeDesktop, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.fontSizeHeadingTitle6);
    element.should("have.css", "line-height", defaultTokens.lineHeightHeadingTitle6);
    element.should("have.css", "font-weight", defaultTokens.fontWeightHeadingTitle6);
  });
});
