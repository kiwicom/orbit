import { defaultTokens } from "@kiwicom/orbit-design-tokens";

describe("Grid media properties and gap", () => {
  it("should have correct gap for mediumMobile", () => {
    cy.visit("/grid-media-props");
    cy.viewport(defaultTokens.breakpointMediumMobile, 600);
    cy.findByTestId("test").should("have.css", "gap", "10px");
    cy.findByTestId("test").should("have.css", "max-width", "300px");
  });

  it("should have correct gap for largeMobile", () => {
    cy.visit("/grid-media-props");
    cy.viewport(defaultTokens.breakpointLargeMobile, 600);
    cy.findByTestId("test").should("have.css", "gap", "20px");
    cy.findByTestId("test").should("have.css", "max-width", "400px");
  });

  it("should have correct gap for tablet", () => {
    cy.visit("/grid-media-props");
    cy.viewport(defaultTokens.breakpointTablet, 600);
    cy.findByTestId("test").should("have.css", "gap", "30px");
    cy.findByTestId("test").should("have.css", "max-width", "500px");
  });

  it("should have correct gap for desktop", () => {
    cy.visit("/grid-media-props");
    cy.viewport(defaultTokens.breakpointDesktop, 600);
    cy.findByTestId("test").should("have.css", "gap", "40px");
    cy.findByTestId("test").should("have.css", "max-width", "600px");
  });

  it("should have correct gap for largeDesktop", () => {
    cy.visit("/grid-media-props");
    cy.viewport(defaultTokens.breakpointLargeDesktop, 600);
    cy.findByTestId("test").should("have.css", "gap", "50px");
    cy.findByTestId("test").should("have.css", "max-width", "700px");
  });
});
