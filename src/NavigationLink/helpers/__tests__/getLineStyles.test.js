// @flow
import getLineStyles from "../getLineStyles";
import { TYPES } from "../../consts";

describe("getLineStyles", () => {
  it("should return proper values", () => {
    expect(getLineStyles({ type: TYPES.HORIZONTAL }).join("")).toBe(
      "width:100%;height:3px;left:0;right:0;bottom:0;",
    );
    expect(getLineStyles({ type: TYPES.VERTICAL }).join("")).toBe(
      "height:100%;width:3px;top:0;left:0;",
    );
  });
});
