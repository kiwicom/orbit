describe("Navigation Bar", () => {
  it("should disappear on scroll", () => {
    cy.visit("/navigation-bar");
    cy.viewport(500, 500);
    cy.findByText("Navigation Bar").should("be.visible");
    cy.scrollTo("bottom");
    cy.findByText("Navigation Bar").should("not.be.visible");
    cy.scrollTo("top");
    cy.findByText("Navigation Bar").should("be.visible");
  });
});
