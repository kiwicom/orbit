import { configure } from "@testing-library/cypress";
import "@testing-library/cypress/add-commands";

configure({
  testIdAttribute: "data-test",
});
