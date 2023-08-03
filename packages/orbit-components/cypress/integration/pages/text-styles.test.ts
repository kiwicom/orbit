import { defaultFoundation } from "@kiwicom/orbit-design-tokens";
import color from "onecolor";

const rgbaRegex = /rgb\((.{1,3}),(.{1,3}),(.{1,3})\)/;
const formatAlpha = (alpha: string) => (_, p1: string, p2: string, p3: string) =>
  `rgba(${p1}, ${p2}, ${p3}, ${alpha})`;

describe("Text colors", () => {
  it("should have correct colors", () => {
    cy.visit("/text-styles");

    cy.findByText("Primary").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.ink.dark).css().replaceAll(",", ", "),
    );

    cy.findByText("Secondary").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.ink.normal).css().replaceAll(",", ", "),
    );

    cy.findByText("Info").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.blue.normal).css().replaceAll(",", ", "),
    );

    cy.findByText("Success").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.green.normal).css().replaceAll(",", ", "),
    );

    cy.findByText("Warning").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.orange.normal).css().replaceAll(",", ", "),
    );

    cy.findByText("Critical").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.red.normal).css().replaceAll(",", ", "),
    );

    cy.findByText("White").should(
      "have.css",
      "color",
      color(defaultFoundation.palette.white.normal).css().replaceAll(",", ", "),
    );
  });

  it("should have correct background colors", () => {
    cy.visit("/text-styles");

    cy.findByText("Primary").should(
      "have.css",
      "background-color",
      color(defaultFoundation.palette.ink.dark).css().replace(rgbaRegex, formatAlpha("0.1")),
    );

    cy.findByText("Secondary").should(
      "have.css",
      "background-color",
      color(defaultFoundation.palette.ink.normal).css().replace(rgbaRegex, formatAlpha("0.1")),
    );

    cy.findByText("Info").should(
      "have.css",
      "background-color",
      color(defaultFoundation.palette.blue.normal).css().replace(rgbaRegex, formatAlpha("0.1")),
    );

    cy.findByText("Success").should(
      "have.css",
      "background-color",
      color(defaultFoundation.palette.green.normal).css().replace(rgbaRegex, formatAlpha("0.1")),
    );

    cy.findByText("Warning").should(
      "have.css",
      "background-color",
      color(defaultFoundation.palette.orange.normal).css().replace(rgbaRegex, formatAlpha("0.1")),
    );

    cy.findByText("Critical").should(
      "have.css",
      "background-color",
      color(defaultFoundation.palette.red.normal).css().replace(rgbaRegex, formatAlpha("0.1")),
    );

    cy.findByText("White").should(
      "have.css",
      "background-color",
      color(defaultFoundation.palette.white.normal).css().replace(rgbaRegex, formatAlpha("0.1")),
    );
  });
});

describe("Text with margins", () => {
  it("should have correct margins from object", () => {
    cy.visit("/text-styles");

    cy.findByText("Object margin").should("have.css", "margin", "2px 4px 0px -1px");
  });

  it("should have correct margins from string", () => {
    cy.visit("/text-styles");

    cy.findByText("String margin").should("have.css", "margin", "0px 1px -2px 0px");
  });
});

describe("Links inside Text", () => {
  it("should have correct common styles", () => {
    cy.visit("/text-styles");

    cy.findByText("Primary")
      .get("a")
      .should("have.css", "font-weight", defaultFoundation.fontWeight.medium)
      .should("have.css", "text-decoration-line", "underline");
  });

  it("should have correct colors", () => {
    cy.visit("/text-styles");

    cy.findByText("Primary")
      .find("a")
      .should(
        "have.css",
        "color",
        color(defaultFoundation.palette.product.dark).css().replaceAll(",", ", "),
      );

    cy.findByText("Secondary")
      .find("a")
      .should(
        "have.css",
        "color",
        color(defaultFoundation.palette.ink.dark).css().replaceAll(",", ", "),
      );

    cy.findByText("Info")
      .find("a")
      .should(
        "have.css",
        "color",
        color(defaultFoundation.palette.blue.dark).css().replaceAll(",", ", "),
      );

    cy.findByText("Success")
      .find("a")
      .should(
        "have.css",
        "color",
        color(defaultFoundation.palette.green.dark).css().replaceAll(",", ", "),
      );

    cy.findByText("Warning")
      .find("a")
      .should(
        "have.css",
        "color",
        color(defaultFoundation.palette.orange.dark).css().replaceAll(",", ", "),
      );

    cy.findByText("Critical")
      .find("a")
      .should(
        "have.css",
        "color",
        color(defaultFoundation.palette.red.dark).css().replaceAll(",", ", "),
      );

    cy.findByText("White")
      .find("a")
      .should(
        "have.css",
        "color",
        color(defaultFoundation.palette.white.normal).css().replaceAll(",", ", "),
      );
  });
});
