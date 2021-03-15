import { stringify, falsyString, pixelized } from "../string";

describe("string utils", () => {
  it("falsyString should return proper value", () => {
    expect(falsyString(true, "test")).toBe("test");
    expect(falsyString(false, "test")).toBe(undefined);
  });
  it("stringify should return proper value", () => {
    expect(stringify("5px")).toBe(`"5px"`);
    expect(stringify(5)).toBe(`"5"`);
  });
  it("pixelized should return proper value", () => {
    expect(pixelized("5")).toBe(`"5px"`);
    expect(pixelized(5)).toBe(`"5px"`);
    expect(pixelized(0)).toBe(`"0"`);
  });
});
