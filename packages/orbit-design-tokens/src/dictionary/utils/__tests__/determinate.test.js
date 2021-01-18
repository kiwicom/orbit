// @flow
import {
  determinateUpperFirst,
  determinateObjectPropertyAlias,
  determinateExport,
} from "../determinate";

describe("determinate utils", () => {
  it("determinateUpperFirst should return proper value", () => {
    expect(determinateUpperFirst("javascript")("test")).toEqual("test");
    expect(determinateUpperFirst("typescript")("test")).toEqual("Test");
  });
  it("determinateObjectPropertyAlias should return proper value", () => {
    expect(determinateObjectPropertyAlias("javascript")("test")).toEqual("test");
    expect(determinateObjectPropertyAlias("typescript")("test")).toEqual("test:Test");
  });
  it("determinateExport should return proper value", () => {
    expect(determinateExport("javascript")("test")).toEqual(" export default test");
    expect(determinateExport("typescript")("test")).toEqual("declare export default Test");
  });
});
