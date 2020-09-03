// @flow
import lengthOf from "./lengthOf";

describe("lengthOf function", () => {
  it("should return proper length", () => {
    expect(
      lengthOf("minmax(10px, 100px) minmax(10px, 100px) minmax(10px, 100px) minmax(10px, 100px)"),
    ).toBe(4);
    expect(lengthOf("10px 20px 10px 20px 10px 20px 10px")).toBe(7);
  });
});
