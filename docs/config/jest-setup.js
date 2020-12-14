import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

configure({
  testIdAttribute: "data-test",
});
