import { configure } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

configure({
  testIdAttribute: "data-test",
});
