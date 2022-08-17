import getBasis from "../getBasis";
import theme from "../../../defaultTheme";

describe("#getBasis", () => {
  it("should set basis", () => {
    expect(getBasis("200px")({ theme })).toBe("200px");
  });
});
