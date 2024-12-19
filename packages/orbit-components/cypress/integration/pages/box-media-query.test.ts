import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import color from "onecolor";

describe("Box media query", () => {
  it("should have correct styles for medium mobile", () => {
    cy.visit("/box-media-props");
    cy.viewport(defaultTokens.breakpointMediumMobile, 600);
    const element = cy.findByText("Box Content");
    element.should("have.css", "display", "flex");
    element.should("have.css", "flex-wrap", "wrap");
    element.should("have.css", "flex-direction", "row-reverse");
    element.should("have.css", "position", "fixed");
    element.should("have.css", "min-width", "42px");
    element.should("not.have.css", "text-align", "center"); // Assertion of next media query style
  });
  it("should have correct styles for large mobile", () => {
    cy.visit("/box-media-props");
    cy.viewport(defaultTokens.breakpointLargeMobile, 600);
    const element = cy.findByText("Box Content");
    element.should("have.css", "text-align", "center");
    element.should("have.css", "border-radius", defaultTokens.borderRadius150);
    element.should("have.css", "overflow", "scroll");
    element.should("have.css", "flex-shrink", "0");
    element.should(
      "have.css",
      "color",
      color(defaultTokens.paletteOrangeDark).css().replaceAll(",", ", "),
    );
    element.should("not.have.css", "flex-grow", "1"); // Assertion of next media query style
  });
  it("should have correct styles for tablet", () => {
    cy.visit("/box-media-props");
    cy.viewport(defaultTokens.breakpointTablet, 600);
    const element = cy.findByText("Box Content");
    element.should("have.css", "flex-grow", "1");
    element.should("have.css", "z-index", "42");
    element.should("have.css", "width", "100px");
    element.should("have.css", "justify-content", "space-between");
    element.should("not.have.css", "align-items", "flex-end"); // Assertion of next media query style
  });
  it("should have correct styles for desktop", () => {
    cy.visit("/box-media-props");
    cy.viewport(defaultTokens.breakpointDesktop, 600);
    const element = cy.findByText("Box Content");
    element.should("not.have.css", "max-height", "24px"); // Assertion of next media query style
    element.should("have.css", "height", "10px");
    element.should("have.css", "top", "10px");
    element.should("have.css", "left", "5px");
    element.should("have.css", "right", "0px");
    element.should("have.css", "bottom", "-1px");
  });
  it("should have correct styles for large desktop", () => {
    cy.visit("/box-media-props");
    cy.viewport(defaultTokens.breakpointLargeDesktop, 600);
    const element = cy.findByText("Box Content");
    element.should(
      "have.css",
      "background-color",
      color(defaultTokens.paletteRedLight).css().replaceAll(",", ", "),
    );
    element.should("have.css", "padding", defaultTokens.space600);
    element.should("have.css", "margin-top", defaultTokens.space300);
    element.should("have.css", "margin-left", "0px");
    element.should("have.css", "margin-right", defaultTokens.space200);
    element.should("have.css", "align-items", "flex-end");
    element.should("have.css", "max-height", "24px");
  });
});
