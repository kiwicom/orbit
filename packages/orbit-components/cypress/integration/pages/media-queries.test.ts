import { defaultTheme } from "@kiwicom/orbit-components";

describe("useMediaQuery", () => {
  it("should respond to changing viewport size", () => {
    cy.visit("/media-queries");

    cy.viewport(defaultTheme.orbit.widthBreakpointDesktop, 800);
    cy.findByText("Medium mobile").should("exist");
    cy.findByText("Large mobile").should("exist");
    cy.findByText("Tablet").should("exist");
    cy.findByText("Desktop").should("exist");
    cy.findByText("Large desktop").should("not.exist");

    cy.viewport(defaultTheme.orbit.widthBreakpointLargeMobile, 800);
    cy.findByText("Medium mobile").should("exist");
    cy.findByText("Large mobile").should("exist");
    cy.findByText("Tablet").should("not.exist");
    cy.findByText("Desktop").should("not.exist");
    cy.findByText("Large desktop").should("not.exist");
  });
});
