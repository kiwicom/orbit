// @flow
import getHeight from "../getHeight";
import { TYPES } from "../../consts";

describe("getHeight", () => {
  it("should return proper values", () => {
    expect(getHeight({ type: TYPES.HORIZONTAL, selectable: true })).toBe("64px");
    expect(getHeight({ type: TYPES.HORIZONTAL, selectable: false })).toBe("44px");
    expect(getHeight({ type: TYPES.VERTICAL, selectable: false })).toBe("32px");
    expect(getHeight({ type: TYPES.VERTICAL, selectable: true })).toBe("32px");
  });
});
