import { TextEncoder } from "util";
import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({
  testIdAttribute: "data-test",
});

// increasing the timeout for the tests
jest.setTimeout(20000);

global.TextEncoder = TextEncoder;
