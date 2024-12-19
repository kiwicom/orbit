import { defaultTokens } from "@kiwicom/orbit-design-tokens";

describe("Stack media properties and spacing", () => {
  it("should have correct spacing for mediumMobile", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.breakpointMediumMobile, 600);
    cy.findByText("2").should("have.css", "margin-left", defaultTokens.space50);
  });

  it("should have correct spacing for largeMobile", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.breakpointLargeMobile, 600);
    cy.findByText("2").should("have.css", "margin-top", defaultTokens.space100);
  });

  it("should have correct spacing for tablet", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.breakpointTablet, 600);
    cy.findByText("2").should("have.css", "margin-left", defaultTokens.space200);
  });

  it("should have correct spacing for desktop", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.breakpointDesktop, 600);
    cy.findByText("2").should("have.css", "margin-left", defaultTokens.space300);
  });

  it("should have correct spacing for largeDesktop", () => {
    cy.visit("/stack-media-props");
    cy.viewport(defaultTokens.breakpointLargeDesktop, 600);
    cy.findByTestId("test").should("have.css", "gap", defaultTokens.space400);
  });
});
