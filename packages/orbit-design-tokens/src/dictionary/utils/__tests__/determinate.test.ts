import {
  determinateUpperFirst,
  determinateObjectPropertyAlias,
  determinateExport,
} from "../determinate";

describe("determinate utils", () => {
  it("determinateUpperFirst should return proper value", () => {
    expect(determinateUpperFirst("javascript")("test")).toBe("test");
    expect(determinateUpperFirst("typescript")("test")).toBe("Test");
  });
  it("determinateObjectPropertyAlias should return proper value", () => {
    expect(determinateObjectPropertyAlias("javascript")("test")).toBe("test");
    expect(determinateObjectPropertyAlias("typescript")("test")).toBe("test:Test");
  });
  it("determinateExport should return proper value", () => {
    expect(determinateExport("javascript")("test")).toBe(" export default test");
    expect(determinateExport("typescript")("test")).toBe("declare export default Test");
  });
});
