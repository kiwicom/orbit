// @flow
import splitToWords from "./splitToWords";

describe("splitToWords function", () => {
  const values = [
    "1fr",
    "0.5em",
    "10.4px",
    "10%",
    "min-content",
    "max-content",
    "minmax(1.2em, 200px)",
    "repeat(10, 1fr 20px 10% 10.4px minmax(10%, 2fr))",
    "repeat(10, min-content auto max-content minmax(10%, max-content))",
  ];
  it("should split to array properly", () => {
    expect(splitToWords(values.join(" "))).toEqual(values);
  });
});
