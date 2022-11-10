describe("booking screenshot testing", () => {
  it("should make screenshot test", () => {
    cy.visit(
      "/en/booking?activeStep=0&currency=czk&flightsId=0X0&handBags=null&holdBags=null&passengers=1&price=100&token=default%3Adefault",
      { timeout: 120000 },
    );
    cy.get("body").screenshot();
  });
});
