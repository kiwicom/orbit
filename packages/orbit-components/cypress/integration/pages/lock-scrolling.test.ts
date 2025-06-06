import { defaultTheme } from "../../..";

const breakpoint = defaultTheme.orbit.breakpointLargeMobile;

describe("useLockScrolling", () => {
  it("should listen for viewport resize", () => {
    cy.viewport(breakpoint - 1, 600);
    cy.visit("/lock-scrolling");
    cy.findAllByRole("button", { name: "Open" }).eq(1).click();
    cy.get("body").should("have.css", "overflow-y", "hidden");
    // cy.get("body").should("have.css", "padding-right", "15px");
    cy.viewport(breakpoint, 600);
    cy.get("body").should("not.have.css", "overflow-y", "hidden");
    cy.viewport(breakpoint - 1, 600);
    cy.get("body").should("have.css", "overflow-y", "hidden");
    cy.findByRole("button", { name: "Close" }).click();
    cy.get("body").should("not.have.css", "overflow-y", "hidden");
  });

  it("should unlock scrolling after last lock is cleared", () => {
    cy.viewport(breakpoint - 1, 600);
    cy.visit("/lock-scrolling");
    cy.findAllByRole("button", { name: "Open" }).eq(1).click();
    cy.findAllByRole("button", { name: "Open nested" }).eq(1).click();
    cy.findByRole("button", { name: "Close nested" }).click();
    cy.get("body").should("have.css", "overflow-y", "hidden");
    cy.findByRole("button", { name: "Close" }).click();
    cy.get("body").should("not.have.css", "overflow-y", "hidden");
  });

  it("should not lock scrolling if disabled via flag", () => {
    cy.visit("/lock-scrolling?disabled");
    cy.get("body").should("not.have.css", "overflow-y", "hidden");
  });
});
