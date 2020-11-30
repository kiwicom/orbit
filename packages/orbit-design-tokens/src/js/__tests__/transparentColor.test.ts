import transparentColor from "../transparentColor";

const testColor = (R: number, G: number, B: number, A?: number) =>
  A ? `rgba(${R}, ${G}, ${B}, ${A})` : `rgb(${R}, ${G}, ${B})`;

describe("transparentColor", () => {
  it("should transparentize properly", () => {
    expect(transparentColor("white", 50)).toBe(testColor(255, 255, 255, 0.5));
    expect(transparentColor("#00A991", 20)).toBe(testColor(0, 169, 145, 0.2));
    expect(transparentColor("#00A991", 99)).toBe(testColor(0, 169, 145, 0.99));
    expect(transparentColor(testColor(0, 169, 145, 0.99), 10)).toBe(testColor(0, 169, 145, 0.1));
    expect(transparentColor(testColor(0, 169, 145), 10)).toBe(testColor(0, 169, 145, 0.1));
  });
});
