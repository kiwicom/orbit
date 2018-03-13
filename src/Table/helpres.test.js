import * as React from "react";
import { isOdd, getChidlName } from "./helpers";
import Table from "./index";

describe("isOdd", () => {
  it("should return true for odd number", () => {
    const result = isOdd(1);
    expect(result).toBe(true);
  });

  it("should return false for even number", () => {
    const result = isOdd(2);
    expect(result).toBe(false);
  });
});

describe("getChidlName", () => {
  it("should return div", () => {
    const element = getChidlName(<div />);
    expect(element).toBe("div");
  });

  it("should return Table", () => {
    const element = getChidlName(<Table />);
    expect(element).toBe("Table");
  });
});
