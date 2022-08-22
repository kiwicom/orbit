import getPosition from "../getPosition";
import POSITIONS from "../../consts";
import theme from "../../../defaultTheme";

describe("getPosition", () => {
  it("should return proper values", () => {
    expect(getPosition({ position: POSITIONS.RIGHT, theme }).join("")).toBe("right:0;");
    expect(getPosition({ position: POSITIONS.LEFT, theme }).join("")).toBe("left:0;");
  });
});
