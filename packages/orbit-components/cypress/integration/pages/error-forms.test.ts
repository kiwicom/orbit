describe("errorForms", () => {
  it("should have error message", () => {
    cy.visit("/error-forms");
    cy.get("input").type("message").should("have.value", "message");
  });
});
