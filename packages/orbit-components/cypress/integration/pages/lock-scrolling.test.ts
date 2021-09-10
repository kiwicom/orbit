describe("useLockScrolling", () => {
  it("should lock scrolling", () => {
    cy.visit("/lock-scrolling");
    cy.get("body").should("have.css", "overflow-y", "hidden");
  });

  it("should not lock scrolling if disabled via flag", () => {
    cy.visit("/lock-scrolling?disabled");
    cy.get("body").should("not.have.css", "overflow-y", "hidden");
  });
});
