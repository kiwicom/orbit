import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock Gatsby Link component
// eslint-disable-next-line no-undef
jest.mock("gatsby", () => {
  const React = require("react");
  function Link({ children, to, ...rest }) {
    return React.createElement("a", { ...rest, href: to }, children);
  }
  return { Link };
});

configure({
  testIdAttribute: "data-test",
});
