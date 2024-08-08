import { defaultTokens } from "@kiwicom/orbit-design-tokens";

describe("Heading media query", () => {
  it("should have correct styles for small mobile", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointMediumMobile - 10, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.headingTitle0FontSize);
    element.should("have.css", "line-height", defaultTokens.headingTitle0LineHeight);
    element.should("have.css", "font-weight", defaultTokens.headingTitle0FontWeight);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.headingDisplayFontSize);
  });
  it("should have correct styles for medium mobile", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointMediumMobile, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.headingDisplayFontSize);
    element.should("have.css", "line-height", defaultTokens.headingDisplayLineHeight);
    element.should("have.css", "font-weight", defaultTokens.headingDisplayFontWeight);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.headingTitle2FontSize);
    element.should("not.have.css", "margin-bottom", defaultTokens.space300);
  });

  it("should have correct styles for large mobile", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointLargeMobile, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.headingTitle2FontSize);
    element.should("have.css", "line-height", defaultTokens.headingTitle2LineHeight);
    element.should("have.css", "font-weight", defaultTokens.headingTitle2FontWeight);
    element.should("have.css", "margin", `0px 0px ${defaultTokens.space200}`);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.headingTitle4FontSize);
    element.should("not.have.css", "text-align", "center");
  });

  it("should have correct styles for tablet", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointTablet, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.headingTitle4FontSize);
    element.should("have.css", "line-height", defaultTokens.headingTitle4LineHeight);
    element.should("have.css", "font-weight", defaultTokens.headingTitle4FontWeight);
    element.should("have.css", "text-align", "center");

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.headingTitle5FontSize);
  });

  it("should have correct styles for desktop", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointDesktop, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.headingTitle5FontSize);
    element.should("have.css", "line-height", defaultTokens.headingTitle5LineHeight);
    element.should("have.css", "font-weight", defaultTokens.headingTitle5FontWeight);

    // Assertion of next media query style
    element.should("not.have.css", "font-size", defaultTokens.headingTitle6FontSize);
  });

  it("should have correct styles for large desktop", () => {
    cy.visit("/heading-media-props");
    cy.viewport(defaultTokens.widthBreakpointLargeDesktop, 600);

    const element = cy.findByRole("heading");
    element.should("have.css", "font-size", defaultTokens.headingTitle6FontSize);
    element.should("have.css", "line-height", defaultTokens.headingTitle6LineHeight);
    element.should("have.css", "font-weight", defaultTokens.headingTitle6FontWeight);
  });
});
