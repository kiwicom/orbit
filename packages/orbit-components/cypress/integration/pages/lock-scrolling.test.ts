describe("useLockScrolling", () => {
  it("should lock scrolling", () => {
    cy.visit("/lock-scrolling");
    cy.get("body").should("have.css", "overflow-y", "hidden");
  });
});
