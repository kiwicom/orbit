import "./commands";

beforeEach(() => {
  cy.log("Initializing test");

  cy.server({
    onAnyRequest: (route, proxy) => {
      proxy.xhr.setRequestHeader("X-Test-Environment", "cypress: frontend/booking");
    },
  });

  Cypress.on("uncaught:exception", () => {
    // return false to prevent the error from failing this test
    return false;
  });

  Cypress.on("uncaught:exception", (err, runnable, promise) => {
    // when the exception originated from an unhandled promise
    // rejection, the promise is provided as a third argument
    // you can turn off failing the test in this case
    return !promise;
  });
});
