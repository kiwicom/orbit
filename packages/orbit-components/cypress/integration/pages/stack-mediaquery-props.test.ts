import { defaultTokens } from "@kiwicom/orbit-design-tokens";

describe("Stack media properties and spacing", () => {
  it("should have correct spacing for mediumMobile", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.widthBreakpointMediumMobile, 600);
    cy.findByText("2").should("have.css", "margin-left", defaultTokens.space50);
  });

  it("should have correct spacing for largeMobile", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.widthBreakpointLargeMobile, 600);
    cy.findByText("2").should("have.css", "margin-top", defaultTokens.space100);
  });

  it("should have correct spacing for tablet", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.widthBreakpointTablet, 600);
    cy.findByText("2").should("have.css", "margin-left", defaultTokens.space200);
  });

  it("should have correct spacing for desktop", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.widthBreakpointDesktop, 600);
    cy.findByText("2").should("have.css", "margin-left", defaultTokens.space300);
  });

  it("should have correct spacing for largeDesktop", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.widthBreakpointLargeDesktop, 600);
    cy.findByTestId("test").should("have.css", "gap", defaultTokens.space400);
  });
});
