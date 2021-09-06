import { defaultTokens } from "@kiwicom/orbit-design-tokens";

describe("modal footer", () => {
  it("should recompute layout after children are done transitioning", () => {
    cy.visit("/modal-footer");
    cy.viewport(defaultTokens.widthBreakpointMediumMobile, 600);
    cy.findByRole("button").click();
    cy.wait(50);
    cy.findAllByTestId(/section|footer/).should($elements => {
      const section = $elements[0];
      const footer = $elements[1];
      expect(section.getBoundingClientRect().bottom).to.be.equal(
        footer.getBoundingClientRect().top,
      );
    });
  });
});
