import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({
  testIdAttribute: "data-test",
});
