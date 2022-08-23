import tooltipSize from "../tooltipSize";
import { SIZE_OPTIONS } from "../../consts";

describe("tooltipSize", () => {
  it("small size", () => {
    expect(tooltipSize({ size: SIZE_OPTIONS.SMALL })).toEqual("240px");
  });
  it("medium size", () => {
    expect(tooltipSize({ size: SIZE_OPTIONS.MEDIUM })).toEqual("380px");
  });
});
