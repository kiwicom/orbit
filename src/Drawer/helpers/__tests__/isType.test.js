// @flow
import { isBox, isNavigation } from "../isType";
import { TYPES } from "../../consts";

describe("isBox", () => {
  it("should return proper values", () => {
    expect(isBox(TYPES.BOX)).toBe(true);
    expect(isBox(TYPES.NAVIGATION)).toBe(false);
  });
});

describe("isNavigation", () => {
  it("should return proper values", () => {
    expect(isNavigation(TYPES.BOX)).toBe(false);
    expect(isNavigation(TYPES.NAVIGATION)).toBe(true);
  });
});
