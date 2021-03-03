import { stringify, falsyString, pixelized } from "../string";

describe("string utils", () => {
  it("falsyString should return proper value", () => {
    expect(falsyString(true, "test")).toEqual("test");
    expect(falsyString(false, "test")).toEqual(undefined);
  });
  it("stringify should return proper value", () => {
    expect(stringify("5px")).toEqual(`"5px"`);
    expect(stringify(5)).toEqual(`"5"`);
  });
  it("pixelized should return proper value", () => {
    expect(pixelized("5")).toEqual(`"5px"`);
    expect(pixelized(5)).toEqual(`"5px"`);
  });
});
