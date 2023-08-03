import { defaultFoundation } from "@kiwicom/orbit-design-tokens";
import color from "onecolor";

describe("TextLink colors", () => {
  it("should have correct underline", () => {
    cy.visit("/text-link-styles");

    cy.findByText("Primary").should("have.css", "text-decoration-line", "underline");

    cy.findByText("No underline").should("have.css", "text-decoration-line", "none");
  });

  it("should have correct colors", () => {
    cy.visit("/text-link-styles");

    cy.findByText("Primary").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.product.dark).css().replaceAll(",", ", "),
    );

    cy.findByText("Secondary").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.ink.dark).css().replaceAll(",", ", "),
    );

    cy.findByText("Info").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.blue.dark).css().replaceAll(",", ", "),
    );

    cy.findByText("Success").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.green.dark).css().replaceAll(",", ", "),
    );

    cy.findByText("Warning").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.orange.dark).css().replaceAll(",", ", "),
    );

    cy.findByText("Critical").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.red.dark).css().replaceAll(",", ", "),
    );

    cy.findByText("White").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.white.normal).css().replaceAll(",", ", "),
    );
  });
});
